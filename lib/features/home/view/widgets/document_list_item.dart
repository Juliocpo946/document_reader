import 'package:flutter/material.dart';
import '../../../../core/models/document_model.dart';
import 'document_menu_anchor.dart';

class DocumentListItem extends StatelessWidget {
  final Document document;
  const DocumentListItem({super.key, required this.document});

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 8, vertical: 4),
      child: ListTile(
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),
        leading: CircleAvatar(
          backgroundColor: document.type.color.withAlpha(50),
          foregroundColor: document.type.color,
          child: Icon(document.type.icon),
        ),
        title: Text(document.name, maxLines: 1, overflow: TextOverflow.ellipsis),
        subtitle: Text('${document.formattedSize} • ${document.formattedDate}'),
        trailing: DocumentMenuAnchor(document: document),
        onTap: () {},
      ),
    );
  }
}