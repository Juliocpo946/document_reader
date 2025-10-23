import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:open_filex/open_filex.dart';
import '../../../../core/models/document_model.dart';
import 'document_menu_anchor.dart';

class DocumentGridItem extends StatelessWidget {
  final Document document;
  const DocumentGridItem({super.key, required this.document});

  void _openDocument(BuildContext context) {
    switch (document.type) {
      case DocumentType.pdf:
        context.push('/pdf-viewer', extra: document);
        break;
      case DocumentType.text:
        context.push('/text-viewer', extra: document);
        break;
      case DocumentType.word:
      case DocumentType.excel:
      case DocumentType.powerpoint:
        context.push('/office-viewer', extra: document);
        break;
      case DocumentType.unknown:
        OpenFilex.open(document.path);
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;

    return Card(
      child: InkWell(
        onTap: () => _openDocument(context),
        borderRadius: BorderRadius.circular(12),
        child: Padding(
          padding: const EdgeInsets.all(12.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  CircleAvatar(
                    backgroundColor: document.type.color.withAlpha(50),
                    foregroundColor: document.type.color,
                    child: Icon(document.type.icon),
                  ),
                  DocumentMenuAnchor(document: document),
                ],
              ),
              const Spacer(),
              Text(
                document.name,
                style: textTheme.titleMedium?.copyWith(fontWeight: FontWeight.bold),
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
              ),
              const SizedBox(height: 4),
              Text(
                '${document.formattedSize} • ${document.formattedDate}',
                style: textTheme.bodySmall,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
              ),
            ],
          ),
        ),
      ),
    );
  }
}