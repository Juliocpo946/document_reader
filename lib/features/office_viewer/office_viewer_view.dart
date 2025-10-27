import 'package:flutter/material.dart';
import '../../core/models/document_model.dart';
import 'word_viewer.dart';
import 'excel_viewer.dart';
import 'powerpoint_viewer.dart';

class OfficeViewerPage extends StatelessWidget {
  final Document document;

  const OfficeViewerPage({super.key, required this.document});

  @override
  Widget build(BuildContext context) {
    switch (document.type) {
      case DocumentType.word:
        return WordViewer(document: document);
      case DocumentType.excel:
        return ExcelViewer(document: document);
      case DocumentType.powerpoint:
        return PowerPointViewer(document: document);
      default:
        return Scaffold(
          appBar: AppBar(title: const Text('Error')),
          body: const Center(
            child: Text('Tipo de documento no soportado'),
          ),
        );
    }
  }
}