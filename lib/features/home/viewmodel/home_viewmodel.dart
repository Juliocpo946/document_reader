import 'dart:io';
import 'package:flutter/material.dart';
import 'package:path/path.dart' as p;
import 'package:permission_handler/permission_handler.dart';
import '../../../core/models/document_model.dart';
import '../../../core/services/android_file_scanner.dart';

enum SortBy { name, date, size }
enum ViewType { list, grid }

class HomeViewModel extends ChangeNotifier {
  final AndroidFileScanner _scanner = AndroidFileScanner();

  List<Document> _allDocuments = [];
  List<Document> _filteredDocuments = [];
  List<Document> get documents => _filteredDocuments;

  bool _isLoading = false;
  bool get isLoading => _isLoading;

  DocumentType? _selectedFilter;
  DocumentType? get selectedFilter => _selectedFilter;

  SortBy _sortBy = SortBy.name;
  SortBy get sortBy => _sortBy;

  ViewType _viewType = ViewType.grid;
  ViewType get viewType => _viewType;

  String _statusMessage = 'Presiona el botón para buscar documentos.';
  String get statusMessage => _statusMessage;

  void toggleViewType() {
    _viewType = _viewType == ViewType.grid ? ViewType.list : ViewType.grid;
    notifyListeners();
  }

  Future<void> scanDocuments() async {
    _isLoading = true;
    _statusMessage = 'Solicitando permisos...';
    notifyListeners();

    var status = await Permission.manageExternalStorage.request();

    if (status.isGranted) {
      _statusMessage = 'Escaneando archivos...';
      notifyListeners();

      final fileMaps = await _scanner.scanFiles();
      if (fileMaps.isEmpty) {
        _statusMessage = 'No se encontraron documentos.';
      } else {
        _allDocuments = fileMaps.map((map) => Document.fromMap(map)).toList();
        _applyFiltersAndSort();
      }
    } else {
      _statusMessage = 'Permiso de almacenamiento denegado.';
    }

    _isLoading = false;
    notifyListeners();
  }

  Future<void> deleteDocument(Document doc) async {
    try {
      final file = File(doc.path);
      if (await file.exists()) {
        await file.delete();
        _allDocuments.removeWhere((d) => d.path == doc.path);
        _applyFiltersAndSort();
        notifyListeners();
      }
    } catch (e) {
      // Handle error
    }
  }

  Future<bool> renameDocument(Document doc, String newName) async {
    if (newName.isEmpty || newName == doc.name) return false;
    try {
      final file = File(doc.path);
      final extension = p.extension(doc.path);
      final newPath = p.join(p.dirname(doc.path), '$newName$extension');

      if (await File(newPath).exists()) return false;

      await file.rename(newPath);
      await scanDocuments(); // Rescan to get updated info
      return true;
    } catch (e) {
      return false;
    }
  }

  void setFilter(DocumentType? filter) {
    _selectedFilter = filter;
    _applyFiltersAndSort();
    notifyListeners();
  }

  void setSortBy(SortBy sort) {
    _sortBy = sort;
    _applyFiltersAndSort();
    notifyListeners();
  }

  void _applyFiltersAndSort() {
    _filteredDocuments = _selectedFilter == null
        ? List.from(_allDocuments)
        : _allDocuments.where((doc) => doc.type == _selectedFilter).toList();

    switch (_sortBy) {
      case SortBy.name:
        _filteredDocuments.sort((a, b) => a.name.toLowerCase().compareTo(b.name.toLowerCase()));
        break;
      case SortBy.date:
        _filteredDocuments.sort((a, b) => b.modifiedDate.compareTo(a.modifiedDate));
        break;
      case SortBy.size:
        _filteredDocuments.sort((a, b) => b.sizeInBytes.compareTo(a.sizeInBytes));
        break;
    }
    if (!_isLoading && _filteredDocuments.isEmpty && _allDocuments.isNotEmpty) {
      _statusMessage = 'No hay documentos de este tipo.';
    }
  }
}