import 'package:flutter/material.dart';
import 'package:flutter_pdfview/flutter_pdfview.dart';
import '../../core/models/document_model.dart';

class PdfViewerPage extends StatelessWidget {
  final Document document;

  const PdfViewerPage({super.key, required this.document});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(document.name),
      ),
      body: PDFView(
        filePath: document.path,
        autoSpacing: true,
        pageFling: true,
        pageSnap: true,
      ),
    );
  }
}