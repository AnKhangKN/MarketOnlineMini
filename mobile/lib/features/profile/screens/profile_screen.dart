import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        children: [
          ElevatedButton(
            onPressed: () => context.go('/login'),
            child: Text("Login Screen"),
          ),

          SizedBox(height: 16.0),

          ElevatedButton(
            onPressed: () => context.go('/signup'),
            child: Text("Sign up screen"),
          ),
        ],
      ),
    );
  }
}
