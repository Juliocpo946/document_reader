import 'package:flutter/services.dart';
import 'package:flutter/foundation.dart';

class AndroidFileScanner {
  static const _platform = MethodChannel('com.example.doc_reader/files');

  Future<List<Map<String, dynamic>>> scanFiles() async {
    try {
      final List<dynamic>? files = await _platform.invokeMethod('scanFiles');
      return files?.map((file) => Map<String, dynamic>.from(file)).toList() ?? [];
    } on PlatformException catch (e) {
      if (kDebugMode) {
        print("Failed to scan files: '${e.message}'.");
      }
      return [];
    }
  }
}