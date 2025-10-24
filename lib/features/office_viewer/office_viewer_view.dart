import 'dart:io';
import 'package:flutter/material.dart';
import 'package:path_provider/path_provider.dart';
import 'package:syncfusion_flutter_pdf/pdf.dart';
import 'package:syncfusion_flutter_pdfviewer/pdfviewer.dart';
import '../../core/models/document_model.dart';
import 'package:open_filex/open_filex.dart';

class OfficeViewerPage extends StatelessWidget {
  final Document document;

  const OfficeViewerPage({super.key, required this.document});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(document.name),
        actions: [
          IconButton(
            icon: const Icon(Icons.open_in_new),
            onPressed: () => OpenFilex.open(document.path),
            tooltip: 'Abrir en app externa',
          ),
        ],
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(
              document.type.icon,
              size: 100,
              color: document.type.color,
            ),
            const SizedBox(height: 24),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 32),
              child: Text(
                document.name,
                style: Theme.of(context).textTheme.titleLarge,
                textAlign: TextAlign.center,
              ),
            ),
            const SizedBox(height: 16),
            Text(
              '${document.formattedSize} • ${document.formattedDate}',
              style: Theme.of(context).textTheme.bodyMedium,
            ),
            const SizedBox(height: 40),
            FilledButton.icon(
              onPressed: () => OpenFilex.open(document.path),
              icon: const Icon(Icons.open_in_new),
              label: const Text('Abrir con app externa'),
            ),
            const SizedBox(height: 12),
            Text(
              'Abrirá con la aplicación predeterminada',
              style: Theme.of(context).textTheme.bodySmall?.copyWith(
                color: Theme.of(context).colorScheme.onSurface.withOpacity(0.6),
              ),
            ),
          ],
        ),
      ),
    );
  }
}