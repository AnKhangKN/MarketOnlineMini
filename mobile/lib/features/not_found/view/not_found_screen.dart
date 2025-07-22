import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class NotFoundScreen extends StatelessWidget {
  const NotFoundScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Not found page"),

              ElevatedButton(
                onPressed: () => context.go('/home'),
                child: Text("Go home"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
