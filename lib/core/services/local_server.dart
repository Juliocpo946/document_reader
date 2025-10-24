import 'dart:io';
import 'package:path/path.dart' as p;

class LocalServer {
  HttpServer? _server;
  String? _currentFilePath;

  Future<String?> startServer(String filePath) async {
    try {
      await stopServer();

      _currentFilePath = filePath;
      _server = await HttpServer.bind(InternetAddress.loopbackIPv4, 0);

      _server!.listen((HttpRequest request) async {
        try {
          final file = File(_currentFilePath!);
          if (!await file.exists()) {
            request.response.statusCode = HttpStatus.notFound;
            await request.response.close();
            return;
          }

          final bytes = await file.readAsBytes();
          final mimeType = _getMimeType(p.extension(_currentFilePath!));

          request.response.headers.contentType = ContentType.parse(mimeType);
          request.response.headers.add('Access-Control-Allow-Origin', '*');
          request.response.add(bytes);
          await request.response.close();
        } catch (e) {
          request.response.statusCode = HttpStatus.internalServerError;
          await request.response.close();
        }
      });

      return 'http://${_server!.address.address}:${_server!.port}';
    } catch (e) {
      return null;
    }
  }

  Future<void> stopServer() async {
    await _server?.close();
    _server = null;
    _currentFilePath = null;
  }

  String _getMimeType(String extension) {
    switch (extension.toLowerCase()) {
      case '.doc':
        return 'application/msword';
      case '.docx':
        return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
      case '.xls':
        return 'application/vnd.ms-excel';
      case '.xlsx':
        return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
      case '.ppt':
        return 'application/vnd.ms-powerpoint';
      case '.pptx':
        return 'application/vnd.openxmlformats-officedocument.presentationml.presentation';
      default:
        return 'application/octet-stream';
    }
  }
}