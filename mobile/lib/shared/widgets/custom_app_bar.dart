import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  final String? title; // không bắt buộc
  final bool showBackButton;

  const CustomAppBar({
    super.key,
    this.title,
    this.showBackButton = true,
  });

  @override
  Widget build(BuildContext context) {
    return AppBar(
      backgroundColor: Colors.white,
      elevation: 0,
      leading: showBackButton
          ? IconButton(
        onPressed: () => context.pop(),
        icon: const Icon(Icons.arrow_back_ios),
        color: Colors.black,
      )
          : null,

      // Nếu có title thì hiển thị nó, còn không thì hiển thị ô tìm kiếm
      title: title != null && title!.isNotEmpty
          ? Text(
        title!,
        style: const TextStyle(color: Colors.black, fontWeight: FontWeight.bold),
      )
          : GestureDetector(
        onTap: () => context.pushNamed('search'),
        child: Container(
          height: 40.0,
          alignment: Alignment.centerLeft,
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          decoration: BoxDecoration(
            color: Colors.grey[200],
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
          onPressed: () => context.pushNamed('cart'),
          icon: const Icon(Icons.shopping_cart),
          color: Colors.black,
        ),

        IconButton(
          onPressed: () => context.pushNamed('chat'),
          icon: const Icon(Icons.chat),
          color: Colors.black,
        ),
      ],
    );
  }

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);
}
