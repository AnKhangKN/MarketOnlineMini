import 'package:go_router/go_router.dart';
import 'package:mobile/features/profile/view/profile_screen.dart';
import 'package:mobile/features/profile/view/update_screen.dart';

final List<GoRoute> profileRoutes = [
  GoRoute(
    path: '/profile',
    name: 'profile',
    pageBuilder: (context, state) => const NoTransitionPage(child: ProfileScreen()),
  ),
  GoRoute(
    path: '/profile/update',
    name: 'updateProfile',
    pageBuilder: (context, state) => const NoTransitionPage(child: UpdateScreen()),
  ),
];
