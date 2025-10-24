import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import '../../core/models/document_model.dart';
import '../../core/services/local_server.dart';

class OfficeViewerPage extends StatefulWidget {
  final Document document;

  const OfficeViewerPage({super.key, required this.document});

  @override
  State<OfficeViewerPage> createState() => _OfficeViewerPageState();
}

class _OfficeViewerPageState extends State<OfficeViewerPage> {
  final LocalServer _localServer = LocalServer();
  late final WebViewController _controller;
  bool _isLoading = true;
  String? _errorMessage;

  @override
  void initState() {
    super.initState();
    _initializeViewer();
  }

  Future<void> _initializeViewer() async {
    final localUrl = await _localServer.startServer(widget.document.path);

    if (localUrl == null) {
      setState(() {
        _errorMessage = 'Error al iniciar servidor local';
        _isLoading = false;
      });
      return;
    }

    final viewerUrl = 'https://docs.google.com/gview?embedded=true&url=$localUrl';

    _controller = WebViewController()
      ..setJavaScriptMode(JavaScriptMode.unrestricted)
      ..setNavigationDelegate(
        NavigationDelegate(
          onPageStarted: (_) => setState(() => _isLoading = true),
          onPageFinished: (_) => setState(() => _isLoading = false),
          onWebResourceError: (error) {
            setState(() {
              _errorMessage = 'Error al cargar documento';
              _isLoading = false;
            });
          },
        ),
      )
      ..loadRequest(Uri.parse(viewerUrl));

    setState(() {});
  }

  @override
  void dispose() {
    _localServer.stopServer();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.document.name),
      ),
      body: _errorMessage != null
          ? Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Icon(Icons.error_outline, size: 64, color: Colors.red),
            const SizedBox(height: 16),
            Text(_errorMessage!),
            const SizedBox(height: 16),
            const Text(
              'Google Docs Viewer requiere conexión a internet',
              style: TextStyle(fontSize: 12),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      )
          : Stack(
        children: [
          if (!_isLoading)
            WebViewWidget(controller: _controller),
          if (_isLoading)
            const Center(child: CircularProgressIndicator()),
        ],
      ),
    );
  }
}