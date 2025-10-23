import 'package:flutter/material.dart';
import 'package:flutter_file_view/flutter_file_view.dart';
import '../../core/models/document_model.dart';

class OfficeViewerPage extends StatelessWidget {
  final Document document;

  const OfficeViewerPage({super.key, required this.document});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(document.name),
      ),
      // La corrección es que el parámetro no es 'filePath' ni se usa un 'controller' complejo,
      // simplemente se llama 'path'.
      body: FileView(
        path: document.path,
      ),
    );
  }
}