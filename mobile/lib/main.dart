import 'package:flutter/material.dart';
import 'package:mobile/config/providers/counter_provider.dart';
import 'package:provider/provider.dart';

import 'app.dart';

void main() {
  runApp(
    MultiProvider(
      // Set up provider
      providers: [ChangeNotifierProvider(create: (_) => CounterProvider())],
      child: const App(),
    ),
  );
}
