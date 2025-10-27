import 'package:flutter/material.dart';
import '../../core/models/document_model.dart';
import '../../core/services/xlsx_parser.dart';

class ExcelViewer extends StatefulWidget {
  final Document document;

  const ExcelViewer({super.key, required this.document});

  @override
  State<ExcelViewer> createState() => _ExcelViewerState();
}

class _ExcelViewerState extends State<ExcelViewer> {
  final XlsxParser _parser = XlsxParser();
  XlsxData? _data;
  int _currentSheetIndex = 0;
  bool _isLoading = true;
  String? _error;

  @override
  void initState() {
    super.initState();
    _loadDocument();
  }

  Future<void> _loadDocument() async {
    try {
      final data = await _parser.parse(widget.document.path);
      if (mounted) {
        setState(() {
          _data = data;
          _isLoading = false;
        });
      }
    } catch (e) {
      if (mounted) {
        setState(() {
          _error = 'Error: $e';
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
        actions: [
          if (_data != null && _data!.sheets.length > 1)
            PopupMenuButton<int>(
              icon: const Icon(Icons.tab),
              tooltip: 'Cambiar hoja',
              onSelected: (index) {
                setState(() => _currentSheetIndex = index);
              },
              itemBuilder: (context) {
                return _data!.sheets.asMap().entries.map((entry) {
                  return CheckedPopupMenuItem<int>(
                    value: entry.key,
                    checked: _currentSheetIndex == entry.key,
                    child: Text(entry.value.name),
                  );
                }).toList();
              },
            ),
        ],
      ),
      body: _buildBody(),
    );
  }

  Widget _buildBody() {
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    if (_error != null) {
      return Center(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Text(_error!, textAlign: TextAlign.center),
        ),
      );
    }

    if (_data == null || _data!.sheets.isEmpty) {
      return const Center(child: Text('Archivo vacío'));
    }

    final currentSheet = _data!.sheets[_currentSheetIndex];

    if (currentSheet.rows.isEmpty) {
      return const Center(child: Text('Hoja vacía'));
    }

    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: _buildTable(currentSheet),
        ),
      ),
    );
  }

  Widget _buildTable(SheetData sheet) {
    final maxColumns = sheet.rows.fold<int>(
      0,
          (max, row) => row.length > max ? row.length : max,
    );

    return Table(
      border: TableBorder.all(
        color: Theme.of(context).dividerColor,
        width: 1,
      ),
      defaultColumnWidth: const IntrinsicColumnWidth(),
      children: sheet.rows.asMap().entries.map((entry) {
        final index = entry.key;
        final row = entry.value;
        final isHeader = index == 0;

        final cells = <Widget>[];
        for (int i = 0; i < maxColumns; i++) {
          final cellValue = i < row.length ? row[i] : '';
          cells.add(_buildCell(cellValue, isHeader));
        }

        return TableRow(
          decoration: isHeader
              ? BoxDecoration(
            color: Theme.of(context).colorScheme.surfaceContainerHighest,
          )
              : null,
          children: cells,
        );
      }).toList(),
    );
  }

  Widget _buildCell(String value, bool isHeader) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Text(
        value,
        style: isHeader
            ? const TextStyle(fontWeight: FontWeight.bold)
            : null,
      ),
    );
  }
}