import 'dart:io';
import 'package:excel/excel.dart';

class XlsxParser {
  Future<XlsxData> parse(String filePath) async {
    try {
      final bytes = await File(filePath).readAsBytes();
      final excel = Excel.decodeBytes(bytes);

      final sheets = <SheetData>[];

      for (final sheetName in excel.tables.keys) {
        final sheet = excel.tables[sheetName];
        if (sheet == null) continue;

        final rows = <List<String>>[];

        for (final row in sheet.rows) {
          final rowData = <String>[];
          for (final cell in row) {
            final value = cell?.value;
            if (value == null) {
              rowData.add('');
            } else if (value is TextCellValue) {
              rowData.add(value.value);
            } else if (value is IntCellValue) {
              rowData.add(value.value.toString());
            } else if (value is DoubleCellValue) {
              rowData.add(value.value.toString());
            } else if (value is DateCellValue) {
              rowData.add(value.toString());
            } else if (value is FormulaCellValue) {
              rowData.add(value.formula);
            } else {
              rowData.add(value.toString());
            }
          }
          rows.add(rowData);
        }

        sheets.add(SheetData(name: sheetName, rows: rows));
      }

      return XlsxData(sheets: sheets);
    } catch (e) {
      return XlsxData(
        sheets: [SheetData(
            name: 'Error',
            rows: [['Error al leer el archivo: $e']]
        )],
      );
    }
  }
}

class XlsxData {
  final List<SheetData> sheets;

  XlsxData({required this.sheets});
}

class SheetData {
  final String name;
  final List<List<String>> rows;

  SheetData({required this.name, required this.rows});
}