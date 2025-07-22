import 'package:go_router/go_router.dart';
import 'package:mobile/features/cart/view/cart_screen.dart';

final List<GoRoute> cartRoutes = [
  GoRoute(
    path: '/cart',
    name: 'cart',
    pageBuilder: (context, state) =>
        const NoTransitionPage(child: CartScreen()),
  ),
];
