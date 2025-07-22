import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class MainShell extends StatelessWidget {
  final Widget child;
  final String location;

  const MainShell({super.key, required this.child, required this.location});

  int _getSelectedIndex(BuildContext context) {
    if (location.startsWith('/home')) return 0;
    if (location.startsWith('/favorites')) return 1;
    if (location.startsWith('/cart')) return 2;
    if (location.startsWith('/profile')) return 3;

    return 0;
  }

  // Hàm điều hướng
  void _onTapped(BuildContext context, int index) {
    switch (index) {
      case 0:
        context.go('/home');
        break;

      case 1:
        context.go('/favorites');
        break;

      case 2:
        context.go('/cart');
        break;

      case 3:
        context.go('/profile');
        break;
    }
  }

  @override
  Widget build(BuildContext context) {
    print('Location $location' );

    final selectedIndex = _getSelectedIndex(context);

    return Scaffold(
      body: child,

      bottomNavigationBar: BottomNavigationBar(
        currentIndex: selectedIndex,
        onTap: (index) => _onTapped(context, index),
        selectedItemColor: Colors.black,
        unselectedItemColor: Colors.grey,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Trang chủ'),
          BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Yêu thích'),
          BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: 'Giỏ hàng'),
          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Tài khoản'),
        ],
      ),

    );
  }
}
