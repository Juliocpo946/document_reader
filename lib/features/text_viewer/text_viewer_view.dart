import 'dart:io';
import 'package:flutter/material.dart';
import '../../core/models/document_model.dart';

class TxtViewerPage extends StatelessWidget {
  final Document document;

  const TxtViewerPage({super.key, required this.document});

  Future<String> _readTxtFile() async {
    try {
      final file = File(document.path);
      return await file.readAsString();
    } catch (e) {
      return 'Error al leer el archivo: $e';
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(document.name),
      ),
      body: FutureBuilder<String>(
        future: _readTxtFile(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(child: CircularProgressIndicator());
          } else if (snapshot.hasError) {
            return Center(child: Text('Error: ${snapshot.error}'));
          } else if (snapshot.hasData) {
            return SingleChildScrollView(
              padding: const EdgeInsets.all(16.0),
              child: Text(snapshot.data!),
            );
          } else {
            return const Center(child: Text('No se pudo cargar el archivo.'));
          }
        },
      ),
    );
  }
}