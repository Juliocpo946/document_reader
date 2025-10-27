import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import '../../core/models/document_model.dart';

class OfficeViewerPage extends StatefulWidget {
  final Document document;
  const OfficeViewerPage({super.key, required this.document});

  @override
  State<OfficeViewerPage> createState() => _OfficeViewerPageState();
}

class _OfficeViewerPageState extends State<OfficeViewerPage> {
  late final WebViewController _controller;
  bool _isLoading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _loadDocument();
  }

  Future<void> _loadDocument() async {
    try {
      _controller = WebViewController()
        ..setJavaScriptMode(JavaScriptMode.unrestricted);

      final fileBytes = await File(widget.document.path).readAsBytes();
      final base64Bytes = base64Encode(fileBytes);

      String htmlContent;
      switch (widget.document.type) {
        case DocumentType.word:
          htmlContent = _getDocxHtml(base64Bytes);
          break;
        case DocumentType.excel:
          htmlContent = _getXlsxHtml(base64Bytes);
          break;
        default:
          htmlContent = _getUnsupportedHtml();
      }

      await _controller.loadHtmlString(htmlContent);

    } catch (e) {
      if (mounted) {
        setState(() {
          _error = "Error al procesar el archivo: $e";
        });
      }
    } finally {
      if (mounted) {
        setState(() {
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
      body: Builder(
        builder: (context) {
          if (_isLoading) {
            return const Center(child: CircularProgressIndicator());
          }
          if (_error != null) {
            return Center(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Text(_error!, textAlign: TextAlign.center),
                ));
          }
          return WebViewWidget(controller: _controller);
        },
      ),
    );
  }

  String _getDocxHtml(String base64) {
    // Esta versión corregida espera a que el DOM esté listo antes de ejecutar el script.
    return '''
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://unpkg.com/docx-preview@0.1.15/dist/docx-preview.js" defer></script>
          <style>
            body { margin: 0; padding: 12px; background-color: #f1f1f1; }
            .docx-wrapper { background-color: white !important; padding: 20px !important; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
          </style>
        </head>
        <body>
          <div id="container"></div>
          <script>
            document.addEventListener('DOMContentLoaded', function() {
              const base64Data = "$base64";
              const arrayBuffer = Uint8Array.from(atob(base64Data), c => c.charCodeAt(0));
              
              docx.renderAsync(arrayBuffer, document.getElementById("container"))
                .catch(function (error) {
                  console.error('Error rendering document:', error);
                  document.getElementById("container").innerText = 'Error al renderizar el documento.';
                });
            });
          </script>
        </body>
      </html>
    ''';
  }

  String _getXlsxHtml(String base64) {
    return '''
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 10px; }
            table { border-collapse: collapse; width: 100%; font-size: 14px; }
            th, td { border: 1px solid #cccccc; text-align: left; padding: 8px; white-space: nowrap; }
            thead > tr > th { background-color: #f2f2f2; position: sticky; top: 0; z-index: 1;}
          </style>
        </head>
        <body>
          <div id="container" style="overflow: auto;"></div>
          <script>
            document.addEventListener('DOMContentLoaded', function() {
              const base64Data = "$base64";
              try {
                const workbook = XLSX.read(atob(base64Data), {type: 'binary'});
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const html = XLSX.utils.sheet_to_html(worksheet);
                document.getElementById("container").innerHTML = html;
              } catch (e) {
                document.getElementById("container").innerHTML = "<h3>Error al renderizar la hoja de cálculo.</h3><p>" + e + "</p>";
              }
            });
          </script>
        </body>
      </html>
    ''';
  }

  String _getUnsupportedHtml() {
    return '''
      <!DOCTYPE html>
      <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="display: flex; align-items: center; justify-content: center; height: 90vh; font-family: sans-serif; text-align: center; padding: 20px;">
          <p>La vista previa para este tipo de archivo<br/>(ej. PowerPoint) no está implementada actualmente.</p>
        </body>
      </html>
    ''';
  }
}