import 'package:go_router/go_router.dart';
import 'package:mobile/features/favorites/view/favorites_screen.dart';

final List<GoRoute> favoritesRoutes = [
  GoRoute(
    path: '/favorites',
    name: 'favorites',
    pageBuilder: (context, state) =>
        const NoTransitionPage(child: FavoritesScreen()),
  ),
];
