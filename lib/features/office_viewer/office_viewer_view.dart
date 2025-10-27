import 'dart:convert';
import 'dart:io';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart'; // Necesario para rootBundle
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
    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(
        NavigationDelegate(
          onPageFinished: (String url) {
            // 2. HTML y JS están cargados. Ahora inyectamos los datos del documento.
            _loadDocumentDataIntoWebView();
          },
          onWebResourceError: (error) {
            if (mounted) {
              setState(() {
                _error = "Error al cargar recursos web: ${error.description}";
                _isLoading = false;
              });
            }
          },
        ),
      );

    // 1. Cargar todo (HTML y JS) como una sola cadena de texto.
    _loadHtmlWithInjectedJs();
  }

  /// Carga la plantilla HTML y los archivos JS locales como una sola cadena.
  /// Carga la plantilla HTML y los archivos JS locales como una sola cadena.
  /// Carga la plantilla HTML y los archivos JS locales como una sola cadena.
  Future<void> _loadHtmlWithInjectedJs() async {
    try {
      // Cargar todos los assets
      final htmlTemplate =
      await rootBundle.loadString('assets/js/viewer_template.html');

      // ---- ESTA ES LA SOLUCIÓN ----
      // 1. Cargar la dependencia JSZip
      final jszipJs = await rootBundle.loadString('assets/js/jszip.min.js');

      // 2. Cargar el script de Excel
      final xlsxJs = await rootBundle.loadString('assets/js/xlsx.full.min.js');

      // 3. Cargar el script de Word
      final docxJs = await rootBundle.loadString('assets/js/docx-preview.js');


      // Combinar todo en el orden correcto
      final fullHtml = '''
        $htmlTemplate
        
        <script>
          $jszipJs
        </script>

        <script>
          $xlsxJs
        </script>

        <script>
          $docxJs
        </script>
      ''';

      // Cargar la cadena HTML combinada
      await _controller.loadHtmlString(fullHtml);

    } catch (e) {
      if (mounted) {
        setState(() {
          _error = "Error al cargar la plantilla o las librerías JS: $e";
          _isLoading = false;
        });
      }
    }
  }

  /// Lee el archivo (.doc, .xls) y llama a la función JS
  Future<void> _loadDocumentDataIntoWebView() async {
    try {
      final fileBytes = await File(widget.document.path).readAsBytes();
      final base64Bytes = base64Encode(fileBytes);

      String jsFunction;
      switch (widget.document.type) {
        case DocumentType.word:
          jsFunction = 'renderDocx("$base64Bytes")';
          break;
        case DocumentType.excel:
          jsFunction = 'renderXlsx("$base64Bytes")';
          break;
        case DocumentType.powerpoint:
          jsFunction = 'renderPptx()';
          break;
        default:
          jsFunction =
          'document.body.innerText = "Tipo de archivo no soportado."';
      }

      await _controller.runJavaScript(jsFunction);
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
          if (_error != null) {
            return Center(
                child: Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: Text(_error!, textAlign: TextAlign.center),
                ));
          }

          return Stack(
            children: [
              WebViewWidget(controller: _controller),
              if (_isLoading)
                const Center(child: CircularProgressIndicator()),
            ],
          );
        },
      ),
    );
  }
}