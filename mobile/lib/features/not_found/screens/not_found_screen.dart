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
            mainAxisSize: MainAxisSize.min,
            children: [
              Text("Not found screen"),

              SizedBox(height: 30,),

              ElevatedButton(
                onPressed: () => context.go('/'),
                child: Text("Back home"),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
