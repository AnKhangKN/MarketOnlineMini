import 'package:go_router/go_router.dart';
import 'package:mobile/features/product/view/search_screen.dart';

final List<GoRoute> productRoutes = [
  GoRoute(
    path: '/search',
    name: 'search',
    pageBuilder: (context, state) =>
        const NoTransitionPage(child: SearchScreen()),
  ),
];
