import 'package:go_router/go_router.dart';
import 'package:mobile/features/cart/cart_route.dart';
import 'package:mobile/features/favorites/favorites_route.dart';
import 'package:mobile/features/not_found/view/not_found_screen.dart';
import 'package:mobile/features/product/product_route.dart';
import 'package:mobile/shared/layout/main_shell.dart';
import 'package:mobile/features/profile/profile_route.dart';
import 'package:mobile/features/home/home_route.dart';

class AppRoutes {
  static final GoRouter router = GoRouter(
    initialLocation: '/home',
    routes: [
      ShellRoute(
        builder: (context, state, child) =>
            MainShell(child: child, location: state.uri.toString()),
        routes: [
          ...homeRoutes,
          ...favoritesRoutes,
          ...cartRoutes,
          ...profileRoutes,
          ...productRoutes,
        ],
      ),
    ],

    errorBuilder: (context, state) => const NotFoundScreen(),
  );
}
