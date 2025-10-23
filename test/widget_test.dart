import 'package:flutter_test/flutter_test.dart';
import 'package:doc_reader/app.dart';

void main() {
  testWidgets('Counter increments smoke test', (WidgetTester tester) async {
    await tester.pumpWidget(const MyApp());


    expect(find.text('Lector de Documentos'), findsOneWidget);
  });
}