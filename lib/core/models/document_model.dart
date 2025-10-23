import 'package:flutter/material.dart';
import 'package:path/path.dart' as p;
import 'package:intl/intl.dart';
import '../utils/app_theme.dart';

enum DocumentType { pdf, word, excel, powerpoint, text, unknown }

extension DocumentTypeExtension on DocumentType {
  Color get color {
    switch (this) {
      case DocumentType.pdf: return AppTheme.pdfColor;
      case DocumentType.word: return AppTheme.wordColor;
      case DocumentType.excel: return AppTheme.excelColor;
      case DocumentType.powerpoint: return AppTheme.powerpointColor;
      case DocumentType.text: return AppTheme.textColor;
      default: return Colors.grey.shade600;
    }
  }

  IconData get icon {
    switch (this) {
      case DocumentType.pdf: return Icons.picture_as_pdf_rounded;
      case DocumentType.word: return Icons.description_rounded;
      case DocumentType.excel: return Icons.table_chart_rounded;
      case DocumentType.powerpoint: return Icons.slideshow_rounded;
      case DocumentType.text: return Icons.article_rounded;
      default: return Icons.insert_drive_file_rounded;
    }
  }
}

class Document {
  final String path;
  final String name;
  final DocumentType type;
  final int sizeInBytes;
  final DateTime modifiedDate;

  Document({
    required this.path,
    required this.name,
    required this.type,
    required this.sizeInBytes,
    required this.modifiedDate,
  });

  String get formattedSize {
    if (sizeInBytes < 1024) return '$sizeInBytes B';
    if (sizeInBytes < 1024 * 1024) return '${(sizeInBytes / 1024).toStringAsFixed(1)} KB';
    return '${(sizeInBytes / (1024 * 1024)).toStringAsFixed(1)} MB';
  }

  String get formattedDate => DateFormat('dd/MM/yy, hh:mm a').format(modifiedDate);

  String get nameWithoutExtension => p.basenameWithoutExtension(name);

  factory Document.fromMap(Map<String, dynamic> map) {
    final String path = map['path'] ?? '';
    final name = p.basename(path);
    final extension = p.extension(path).toLowerCase();

    DocumentType type;
    switch (extension) {
      case '.pdf': type = DocumentType.pdf; break;
      case '.doc': case '.docx': type = DocumentType.word; break;
      case '.xls': case '.xlsx': type = DocumentType.excel; break;
      case '.ppt': case '.pptx': type = DocumentType.powerpoint; break;
      case '.txt': type = DocumentType.text; break;
      default: type = DocumentType.unknown;
    }

    return Document(
      path: path,
      name: name,
      type: type,
      sizeInBytes: (map['size'] as num? ?? 0).toInt(),
      modifiedDate: DateTime.fromMillisecondsSinceEpoch((map['modified'] as num? ?? 0).toInt() * 1000),
    );
  }
}