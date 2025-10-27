import 'package:flutter/material.dart';
import '../../core/models/document_model.dart';
import '../../core/services/docx_parser.dart' as docx_parser;

class WordViewer extends StatefulWidget {
  final Document document;

  const WordViewer({super.key, required this.document});

  @override
  State<WordViewer> createState() => _WordViewerState();
}

class _WordViewerState extends State<WordViewer> {
  final docx_parser.DocxParser _parser = docx_parser.DocxParser();
  List<docx_parser.DocxElement>? _elements;
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

  Widget _buildElement(docx_parser.DocxElement element) {
    switch (element.type) {
      case docx_parser.ElementType.paragraph:
        return _buildParagraph(element);
      case docx_parser.ElementType.table:
        return _buildTable(element);
    }
  }

  Widget _buildParagraph(docx_parser.DocxElement element) {
    if (element.text == null || element.text!.isEmpty) {
      return const SizedBox(height: 8);
    }

    final style = element.style ?? docx_parser.TextStyle();
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

  Widget _buildTable(docx_parser.DocxElement element) {
    if (element.tableData == null || element.tableData!.isEmpty) {
      return const SizedBox.shrink();
    }

    final int maxColumns = element.tableData!.fold<int>(
      0,
          (max, row) => row.length > max ? row.length : max,
    );

    if (maxColumns == 0) {
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
                children: List.generate(maxColumns, (index) {
                  final cellValue = index < row.length ? row[index] : '';
                  return Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(cellValue),
                  );
                }),
              );
            }).toList(),
          ),
        ),
      ),
    );
  }
}