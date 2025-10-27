import 'package:flutter/material.dart';
import '../../core/models/document_model.dart';
import '../../core/services/docx_parser.dart';

class WordViewer extends StatefulWidget {
  final Document document;

  const WordViewer({super.key, required this.document});

  @override
  State<WordViewer> createState() => _WordViewerState();
}

class _WordViewerState extends State<WordViewer> {
  final DocxParser _parser = DocxParser();
  List<DocxElement>? _elements;
  bool _isLoading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _loadDocument();
  }

  Future<void> _loadDocument() async {
    try {
      final elements = await _parser.parse(widget.document.path);
      if (mounted) {
        setState(() {
          _elements = elements;
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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.document.name),
      ),
      body: _buildBody(),
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

    if (_elements == null || _elements!.isEmpty) {
      return const Center(child: Text('Documento vacío'));
    }

    return ListView.builder(
      padding: const EdgeInsets.all(16.0),
      itemCount: _elements!.length,
      itemBuilder: (context, index) {
        final element = _elements![index];
        return _buildElement(element);
      },
    );
  }

  Widget _buildElement(DocxElement element) {
    switch (element.type) {
      case ElementType.paragraph:
        return _buildParagraph(element);
      case ElementType.table:
        return _buildTable(element);
    }
  }

  Widget _buildParagraph(DocxElement element) {
    if (element.text == null || element.text!.isEmpty) {
      return const SizedBox(height: 8);
    }

    final style = element.style ?? TextStyle();
    final textTheme = Theme.of(context).textTheme;

    TextStyle textStyle;
    if (style.isHeading) {
      textStyle = textTheme.headlineSmall!;
    } else {
      textStyle = textTheme.bodyLarge!;
    }

    if (style.isBold) {
      textStyle = textStyle.copyWith(fontWeight: FontWeight.bold);
    }

    if (style.isItalic) {
      textStyle = textStyle.copyWith(fontStyle: FontStyle.italic);
    }

    return Padding(
      padding: EdgeInsets.only(bottom: style.isHeading ? 16.0 : 8.0),
      child: Text(element.text!, style: textStyle),
    );
  }

  Widget _buildTable(DocxElement element) {
    if (element.tableData == null || element.tableData!.isEmpty) {
      return const SizedBox.shrink();
    }

    return Padding(
      padding: const EdgeInsets.only(bottom: 16.0),
      child: Card(
        child: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Table(
            border: TableBorder.all(
              color: Theme.of(context).dividerColor,
              width: 1,
            ),
            children: element.tableData!.map((row) {
              return TableRow(
                children: row.map((cell) {
                  return Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(cell),
                  );
                }).toList(),
              );
            }).toList(),
          ),
        ),
      ),
    );
  }
}