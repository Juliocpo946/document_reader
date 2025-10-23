import 'package:doc_reader/core/viewmodels/theme_provider.dart';
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'features/home/view/home_view.dart';
import 'features/home/viewmodel/home_viewmodel.dart';
import 'core/utils/app_theme.dart';

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => HomeViewModel()),
        ChangeNotifierProvider(create: (_) => ThemeProvider()),
      ],
      child: Consumer<ThemeProvider>(
        builder: (context, themeProvider, child) {
          final theme = themeProvider.themeMode == ThemeMode.light
              ? AppTheme.lightTheme
              : AppTheme.darkTheme;
          return AnimatedTheme(
            data: theme,
            duration: const Duration(milliseconds: 400),
            child: MaterialApp(
              debugShowCheckedModeBanner: false,
              title: 'Lector de Documentos',
              theme: AppTheme.lightTheme,
              darkTheme: AppTheme.darkTheme,
              themeMode: themeProvider.themeMode,
              home: const HomeView(),
            ),
          );
        },
      ),
    );
  }
}