import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/constants/app_colors.dart';

class SearchScreen extends StatefulWidget {
  const SearchScreen({super.key});

  @override
  State<SearchScreen> createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          leading: IconButton(onPressed: () => context.pop(), icon: Icon(Icons.arrow_back_ios)),

        title: Container(
          height: 40,
          padding: const EdgeInsets.symmetric(horizontal: 12),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(8),
          ),
          child: const TextField(
            decoration: InputDecoration(
              hintText: 'Tìm kiếm sản phẩm',
              border: InputBorder.none,
              icon: Icon(Icons.search),
            ),
          ),
        ),
        backgroundColor: AppColors.mainApp,
      ),


      body: SafeArea(child: Center(child: Text("Search page"))),
    );
  }
}
