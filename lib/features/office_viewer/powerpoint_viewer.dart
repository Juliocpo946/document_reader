import 'package:flutter/material.dart';
import '../../core/models/document_model.dart';
import '../../core/services/pptx_parser.dart';

class PowerPointViewer extends StatefulWidget {
  final Document document;

  const PowerPointViewer({super.key, required this.document});

  @override
  State<PowerPointViewer> createState() => _PowerPointViewerState();
}

class _PowerPointViewerState extends State<PowerPointViewer> {
  final PptxParser _parser = PptxParser();
  List<Slide>? _slides;
  int _currentSlideIndex = 0;
  bool _isLoading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _loadDocument();
  }

  Future<void> _loadDocument() async {
    try {
      final slides = await _parser.parse(widget.document.path);
      if (mounted) {
        setState(() {
          _slides = slides;
          _isLoading = false;
        });
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          _error = 'Error: $e';
          _isLoading = false;
        });
      }
    }
  }

  void _previousSlide() {
    if (_currentSlideIndex > 0) {
      setState(() => _currentSlideIndex--);
    }
  }

  void _nextSlide() {
    if (_slides != null && _currentSlideIndex < _slides!.length - 1) {
      setState(() => _currentSlideIndex++);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.document.name),
        actions: [
          if (_slides != null && _slides!.isNotEmpty)
            Center(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 16.0),
                child: Text(
                  '${_currentSlideIndex + 1} / ${_slides!.length}',
                  style: Theme.of(context).textTheme.titleMedium,
                ),
              ),
            ),
        ],
      ),
      body: _buildBody(),
      bottomNavigationBar: _slides != null && _slides!.length > 1
          ? _buildNavigationBar()
          : null,
    );
  }

  Widget _buildBody() {
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    if (_error != null) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Text(_error!, textAlign: TextAlign.center),
        ),
      );
    }

    if (_slides == null || _slides!.isEmpty) {
      return const Center(child: Text('Presentación vacía'));
    }

    return GestureDetector(
      onHorizontalDragEnd: (details) {
        if (details.primaryVelocity! < 0) {
          _nextSlide();
        } else if (details.primaryVelocity! > 0) {
          _previousSlide();
        }
      },
      child: _buildSlide(_slides![_currentSlideIndex]),
    );
  }

  Widget _buildSlide(Slide slide) {
    return Container(
      color: Theme.of(context).colorScheme.surfaceContainerHighest,
      child: Center(
        child: Card(
          margin: const EdgeInsets.all(16.0),
          child: Container(
            constraints: const BoxConstraints(maxWidth: 800),
            padding: const EdgeInsets.all(32.0),
            child: slide.content.isEmpty
                ? const Center(child: Text('Diapositiva vacía'))
                : ListView.separated(
              itemCount: slide.content.length,
              separatorBuilder: (context, index) => const SizedBox(height: 16),
              itemBuilder: (context, index) {
                final isTitle = index == 0;
                return Text(
                  slide.content[index],
                  style: isTitle
                      ? Theme.of(context).textTheme.headlineMedium
                      : Theme.of(context).textTheme.bodyLarge,
                  textAlign: isTitle ? TextAlign.center : TextAlign.left,
                );
              },
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildNavigationBar() {
    return BottomAppBar(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          IconButton(
            icon: const Icon(Icons.arrow_back),
            onPressed: _currentSlideIndex > 0 ? _previousSlide : null,
            tooltip: 'Anterior',
          ),
          Text(
            'Diapositiva ${_currentSlideIndex + 1}',
            style: Theme.of(context).textTheme.titleMedium,
          ),
          IconButton(
            icon: const Icon(Icons.arrow_forward),
            onPressed: _currentSlideIndex < _slides!.length - 1 ? _nextSlide : null,
            tooltip: 'Siguiente',
          ),
        ],
      ),
    );
  }
}