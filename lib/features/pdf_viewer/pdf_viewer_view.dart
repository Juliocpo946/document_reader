import 'package:flutter/material.dart';
import 'package:pdfx/pdfx.dart';
import '../../core/models/document_model.dart';

class PdfViewerPage extends StatefulWidget {
  final Document document;

  const PdfViewerPage({super.key, required this.document});

  @override
  State<PdfViewerPage> createState() => _PdfViewerPageState();
}

class _PdfViewerPageState extends State<PdfViewerPage> {
  late PdfController _controller;
  bool _isLoading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _loadPdf();
  }

  Future<void> _loadPdf() async {
    try {
      _controller = PdfController(
        document: PdfDocument.openFile(widget.document.path),
      );
      setState(() => _isLoading = false);
    } catch (e) {
      setState(() {
        _error = 'Error al cargar PDF: $e';
        _isLoading = false;
      });
    }
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.document.name),
      ),
      body: _isLoading
          ? const Center(child: CircularProgressIndicator())
          : _error != null
          ? Center(child: Text(_error!))
          : PdfView(
        controller: _controller,
        scrollDirection: Axis.vertical,
      ),
    );
  }
}