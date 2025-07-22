import 'package:flutter/material.dart';
import 'package:mobile/config/routes/app_routes.dart';

class App extends StatelessWidget {
  const App({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: 'MartketMiniOnline',
      debugShowCheckedModeBanner: false,
      routerConfig: AppRoutes.router,
    );
  }
}
