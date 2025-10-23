import 'package:go_router/go_router.dart';
import '../../features/home/view/home_view.dart';
import '../../features/pdf_viewer/pdf_viewer_view.dart';
import '../../features/text_viewer/text_viewer_view.dart';
import '../../features/office_viewer/office_viewer_view.dart';
import '../models/document_model.dart';

class AppRouter {
  static final GoRouter router = GoRouter(
    routes: [
      GoRoute(
        path: '/',
        builder: (context, state) => const HomeView(),
      ),
      GoRoute(
        path: '/pdf-viewer',
        builder: (context, state) {
          final doc = state.extra as Document;
          return PdfViewerPage(document: doc);
        },
      ),
      GoRoute(
        path: '/text-viewer',
        builder: (context, state) {
          final doc = state.extra as Document;
          return TxtViewerPage(document: doc);
        },
      ),
      GoRoute(
        path: '/office-viewer',
        builder: (context, state) {
          final doc = state.extra as Document;
          return OfficeViewerPage(document: doc);
        },
      ),
    ],
  );
}