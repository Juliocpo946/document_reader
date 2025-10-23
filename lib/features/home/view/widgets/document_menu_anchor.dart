import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:share_plus/share_plus.dart';
import '../../../../core/models/document_model.dart';
import '../../viewmodel/home_viewmodel.dart';

class DocumentMenuAnchor extends StatelessWidget {
  final Document document;
  const DocumentMenuAnchor({super.key, required this.document});

  @override
  Widget build(BuildContext context) {
    return MenuAnchor(
      builder: (context, controller, child) {
        return IconButton(
          onPressed: () => controller.isOpen ? controller.close() : controller.open(),
          icon: const Icon(Icons.more_vert),
          tooltip: 'Más opciones',
        );
      },
      menuChildren: [
        MenuItemButton(
          leadingIcon: const Icon(Icons.drive_file_rename_outline),
          onPressed: () => _showRenameDialog(context, document),
          child: const Text('Renombrar'),
        ),
        MenuItemButton(
          leadingIcon: const Icon(Icons.share_outlined),
          onPressed: () => Share.shareXFiles([XFile(document.path)]),
          child: const Text('Compartir'),
        ),
        MenuItemButton(
          leadingIcon: const Icon(Icons.info_outline),
          onPressed: () => _showDetailsDialog(context, document),
          child: const Text('Detalles'),
        ),
        const Divider(),
        MenuItemButton(
          leadingIcon: Icon(Icons.delete_outline, color: Theme.of(context).colorScheme.error),
          onPressed: () => _showDeleteConfirmation(context, document),
          child: Text('Eliminar', style: TextStyle(color: Theme.of(context).colorScheme.error)),
        ),
      ],
    );
  }

  void _showDeleteConfirmation(BuildContext context, Document doc) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Eliminar Documento'),
        content: Text('¿Estás seguro de que deseas eliminar "${doc.name}" de forma permanente?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Cancelar'),
          ),
          FilledButton(
            style: FilledButton.styleFrom(backgroundColor: Theme.of(context).colorScheme.error),
            onPressed: () {
              context.read<HomeViewModel>().deleteDocument(doc);
              Navigator.of(context).pop();
            },
            child: const Text('Eliminar'),
          ),
        ],
      ),
    );
  }

  void _showRenameDialog(BuildContext context, Document doc) {
    final controller = TextEditingController(text: doc.nameWithoutExtension);
    final formKey = GlobalKey<FormState>();
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Renombrar Documento'),
        content: Form(
          key: formKey,
          child: TextFormField(
            controller: controller,
            autofocus: true,
            decoration: const InputDecoration(labelText: 'Nuevo nombre'),
            validator: (value) {
              if (value == null || value.trim().isEmpty) {
                return 'El nombre no puede estar vacío';
              }
              return null;
            },
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Cancelar'),
          ),
          FilledButton(
            onPressed: () async {
              if (formKey.currentState!.validate()) {
                final success = await context.read<HomeViewModel>().renameDocument(doc, controller.text.trim());
                if (context.mounted) {
                  Navigator.of(context).pop();
                  if (!success) {
                    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
                      content: Text('Error al renombrar. El archivo ya existe o el nombre no es válido.'),
                      backgroundColor: Colors.red,
                    ));
                  }
                }
              }
            },
            child: const Text('Renombrar'),
          ),
        ],
      ),
    );
  }

  void _showDetailsDialog(BuildContext context, Document doc) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Detalles del Documento'),
        content: SingleChildScrollView(
          child: ListBody(
            children: [
              _DetailRow(title: 'Nombre', content: doc.name),
              _DetailRow(title: 'Tipo', content: doc.type.name),
              _DetailRow(title: 'Tamaño', content: '${doc.formattedSize} (${doc.sizeInBytes} bytes)'),
              _DetailRow(title: 'Modificado', content: doc.formattedDate),
              _DetailRow(title: 'Ubicación', content: doc.path),
            ],
          ),
        ),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Cerrar'),
          ),
        ],
      ),
    );
  }
}

class _DetailRow extends StatelessWidget {
  final String title;
  final String content;
  const _DetailRow({required this.title, required this.content});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4.0),
      child: Text.rich(TextSpan(children: [
        TextSpan(text: '$title: ', style: const TextStyle(fontWeight: FontWeight.bold)),
        TextSpan(text: content),
      ])),
    );
  }
}