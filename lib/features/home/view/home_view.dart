import 'package:doc_reader/core/models/document_model.dart';
import 'package:doc_reader/core/viewmodels/theme_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../viewmodel/home_viewmodel.dart';
import 'widgets/document_grid_item.dart';
import 'widgets/document_list_item.dart';
import 'widgets/filter_chip_bar.dart';

class HomeView extends StatelessWidget {
  const HomeView({super.key});

  @override
  Widget build(BuildContext context) {
    final viewModel = context.watch<HomeViewModel>();
    final themeProvider = context.watch<ThemeProvider>();

    return Scaffold(
      appBar: AppBar(
        title: const Text('Lector de Documentos'),
        actions: [
          _SortMenu(),
          IconButton(
            icon: Icon(viewModel.viewType == ViewType.grid ? Icons.list : Icons.grid_view),
            onPressed: () => context.read<HomeViewModel>().toggleViewType(),
            tooltip: 'Cambiar Vista',
          ),
          IconButton(
            icon: Icon(themeProvider.themeMode == ThemeMode.light
                ? Icons.dark_mode_outlined
                : Icons.light_mode_outlined),
            onPressed: () => context.read<ThemeProvider>().toggleTheme(),
            tooltip: 'Cambiar Tema',
          ),
        ],
      ),
      body: Column(
        children: [
          const FilterChipBar(),
          Expanded(
            child: _buildBody(context, viewModel),
          ),
        ],
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () => context.read<HomeViewModel>().scanDocuments(),
        tooltip: 'Escanear Documentos',
        child: const Icon(Icons.search),
      ),
    );
  }

  Widget _buildBody(BuildContext context, HomeViewModel viewModel) {
    if (viewModel.isLoading) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const CircularProgressIndicator(),
            const SizedBox(height: 16),
            Text(viewModel.statusMessage),
          ],
        ),
      );
    }
    if (viewModel.documents.isEmpty) {
      return Center(child: Text(viewModel.statusMessage));
    }

    if (viewModel.viewType == ViewType.grid) {
      return _buildGridView(viewModel.documents);
    } else {
      return _buildListView(viewModel.documents);
    }
  }

  Widget _buildListView(List<Document> documents) {
    return ListView.builder(
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      itemCount: documents.length,
      itemBuilder: (context, index) {
        final doc = documents[index];
        return DocumentListItem(document: doc);
      },
    );
  }

  Widget _buildGridView(List<Document> documents) {
    return LayoutBuilder(
        builder: (context, constraints) {
          final crossAxisCount = (constraints.maxWidth / 200).floor().clamp(2, 5);
          return GridView.builder(
            padding: const EdgeInsets.all(8.0),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: crossAxisCount,
              crossAxisSpacing: 8.0,
              mainAxisSpacing: 8.0,
              childAspectRatio: 0.8,
            ),
            itemCount: documents.length,
            itemBuilder: (context, index) {
              final doc = documents[index];
              return DocumentGridItem(document: doc);
            },
          );
        }
    );
  }
}

class _SortMenu extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final viewModel = context.watch<HomeViewModel>();
    return PopupMenuButton<SortBy>(
      icon: const Icon(Icons.sort),
      tooltip: 'Ordenar por',
      onSelected: (sort) => context.read<HomeViewModel>().setSortBy(sort),
      itemBuilder: (context) => [
        CheckedPopupMenuItem(
          value: SortBy.name,
          checked: viewModel.sortBy == SortBy.name,
          child: const Text('Nombre'),
        ),
        CheckedPopupMenuItem(
          value: SortBy.date,
          checked: viewModel.sortBy == SortBy.date,
          child: const Text('Fecha'),
        ),
        CheckedPopupMenuItem(
          value: SortBy.size,
          checked: viewModel.sortBy == SortBy.size,
          child: const Text('Tamaño'),
        ),
      ],
    );
  }
}