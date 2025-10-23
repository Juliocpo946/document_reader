import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../../../../core/models/document_model.dart';
import '../../viewmodel/home_viewmodel.dart';

class FilterChipBar extends StatelessWidget {
  const FilterChipBar({super.key});

  @override
  Widget build(BuildContext context) {
    final viewModel = context.watch<HomeViewModel>();

    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      child: Row(
        children: [
          FilterChip(
            label: const Text('Todos'),
            selected: viewModel.selectedFilter == null,
            onSelected: (_) => viewModel.setFilter(null),
          ),
          ...DocumentType.values
              .where((type) => type != DocumentType.unknown)
              .map((type) {
            return Padding(
              padding: const EdgeInsets.only(left: 8.0),
              child: FilterChip(
                label: Text(type.name.capitalize()),
                selected: viewModel.selectedFilter == type,
                onSelected: (_) => viewModel.setFilter(type),
              ),
            );
          }),
        ],
      ),
    );
  }
}

extension StringExtension on String {
  String capitalize() {
    return "${this[0].toUpperCase()}${substring(1)}";
  }
}