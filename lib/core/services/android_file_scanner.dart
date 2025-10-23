import 'package:flutter/services.dart';

class AndroidFileScanner {
  static const _platform = MethodChannel('com.example.doc_reader/files');

  Future<List<String>> scanFiles() async {
    try {
      final List<dynamic>? files = await _platform.invokeMethod('scanFiles');
      return files?.cast<String>() ?? [];
    } on PlatformException catch (e) {
      print("Failed to scan files: '${e.message}'.");
      return [];
    }
  }
}