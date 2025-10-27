import 'dart:io';
import 'package:archive/archive.dart';
import 'package:xml/xml.dart';

class PptxParser {
  Future<List<Slide>> parse(String filePath) async {
    try {
      final bytes = await File(filePath).readAsBytes();
      final archive = ZipDecoder().decodeBytes(bytes);

      final slides = <Slide>[];
      final slideFiles = archive.where((file) =>
      file.name.startsWith('ppt/slides/slide') &&
          file.name.endsWith('.xml') &&
          !file.name.contains('_rels')
      ).toList();

      slideFiles.sort((a, b) => a.name.compareTo(b.name));

      for (final slideFile in slideFiles) {
        if (slideFile.content is! List<int>) continue;

        final xmlString = String.fromCharCodes(slideFile.content as List<int>);
        final document = XmlDocument.parse(xmlString);

        slides.add(_parseSlide(document, slides.length + 1));
      }

      return slides;
    } catch (e) {
      return [Slide(
          number: 1,
          content: ['Error al leer el archivo: $e']
      )];
    }
  }

  Slide _parseSlide(XmlDocument document, int number) {
    final content = <String>[];
    final textElements = document.findAllElements('a:t');

    for (final textElement in textElements) {
      final text = textElement.innerText.trim();
      if (text.isNotEmpty) {
        content.add(text);
      }
    }

    return Slide(number: number, content: content);
  }
}

class Slide {
  final int number;
  final List<String> content;

  Slide({required this.number, required this.content});
}