import 'dart:io';
import 'package:archive/archive.dart';
import 'package:xml/xml.dart';

class DocxParser {
  Future<List<DocxElement>> parse(String filePath) async {
    try {
      final bytes = await File(filePath).readAsBytes();
      final archive = ZipDecoder().decodeBytes(bytes);
      final documentXml = archive.firstWhere((file) => file.name == 'word/document.xml');

      if (documentXml.content is! List<int>) return [];

      final xmlString = String.fromCharCodes(documentXml.content as List<int>);
      final document = XmlDocument.parse(xmlString);

      return _parseDocument(document);
    } catch (e) {
      return [DocxElement(type: ElementType.paragraph, text: 'Error al leer el archivo: $e')];
    }
  }

  List<DocxElement> _parseDocument(XmlDocument document) {
    final elements = <DocxElement>[];
    final body = document.findAllElements('w:body').firstOrNull;
    if (body == null) return elements;

    for (final child in body.children.whereType<XmlElement>()) {
      if (child.name.local == 'p') {
        final text = _extractParagraphText(child);
        if (text.isNotEmpty) {
          elements.add(DocxElement(
            type: ElementType.paragraph,
            text: text,
            style: _extractParagraphStyle(child),
          ));
        }
      } else if (child.name.local == 'tbl') {
        elements.add(DocxElement(
          type: ElementType.table,
          tableData: _extractTable(child),
        ));
      }
    }

    return elements;
  }

  String _extractParagraphText(XmlElement paragraph) {
    final runs = paragraph.findAllElements('w:r');
    final buffer = StringBuffer();

    for (final run in runs) {
      final textElements = run.findAllElements('w:t');
      for (final textElement in textElements) {
        buffer.write(textElement.innerText);
      }
    }

    return buffer.toString().trim();
  }

  TextStyle _extractParagraphStyle(XmlElement paragraph) {
    final pPr = paragraph.findElements('w:pPr').firstOrNull;
    if (pPr == null) return TextStyle();

    bool isBold = false;
    bool isItalic = false;
    bool isHeading = false;

    final pStyle = pPr.findElements('w:pStyle').firstOrNull;
    if (pStyle != null) {
      final val = pStyle.getAttribute('w:val');
      isHeading = val?.toLowerCase().contains('heading') ?? false;
    }

    final runs = paragraph.findAllElements('w:r');
    for (final run in runs) {
      final rPr = run.findElements('w:rPr').firstOrNull;
      if (rPr != null) {
        isBold = rPr.findElements('w:b').isNotEmpty;
        isItalic = rPr.findElements('w:i').isNotEmpty;
        if (isBold || isItalic) break;
      }
    }

    return TextStyle(
      isBold: isBold,
      isItalic: isItalic,
      isHeading: isHeading,
    );
  }

  List<List<String>> _extractTable(XmlElement table) {
    final rows = <List<String>>[];
    final tableRows = table.findAllElements('w:tr');

    for (final row in tableRows) {
      final cells = <String>[];
      final tableCells = row.findAllElements('w:tc');

      for (final cell in tableCells) {
        final paragraphs = cell.findAllElements('w:p');
        final cellText = StringBuffer();

        for (final p in paragraphs) {
          final text = _extractParagraphText(p);
          if (text.isNotEmpty) {
            if (cellText.isNotEmpty) cellText.write('\n');
            cellText.write(text);
          }
        }

        cells.add(cellText.toString());
      }

      if (cells.isNotEmpty) rows.add(cells);
    }

    return rows;
  }
}

enum ElementType { paragraph, table }

class DocxElement {
  final ElementType type;
  final String? text;
  final TextStyle? style;
  final List<List<String>>? tableData;

  DocxElement({
    required this.type,
    this.text,
    this.style,
    this.tableData,
  });
}

class TextStyle {
  final bool isBold;
  final bool isItalic;
  final bool isHeading;

  TextStyle({
    this.isBold = false,
    this.isItalic = false,
    this.isHeading = false,
  });
}