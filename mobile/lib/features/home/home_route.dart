import 'package:go_router/go_router.dart';
import 'package:mobile/features/home/view/home_screen.dart';

final List<GoRoute> homeRoutes = [
  GoRoute(path: '/home',
    name: 'home',
    pageBuilder: (context, state) =>
    const NoTransitionPage(child: HomeScreen()),)
];


