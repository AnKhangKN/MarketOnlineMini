import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: GestureDetector(
          onTap: () {
            print('Going to search');
            context.pushNamed('search');
          },
          child: Container(
            height: 40.0,
            alignment: Alignment.centerLeft,
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(16.0),
            ),
            child: const Text(
              "Tìm kiếm sản phẩm",
              style: TextStyle(color: Colors.grey),
            ),
          ),
        ),

          actions: [
          IconButton(
            onPressed: () => context.pushNamed('search'),

            icon: Icon(Icons.shopping_cart),
          ),

          IconButton(
            onPressed: () => context.go('/chat'),
            icon: Icon(Icons.chat),
          ),
        ],
      ),

      body: SafeArea(child: Center(child: Text('Home screen'))),
    );
  }
}
