import 'package:go_router/go_router.dart';
import 'package:mobile/features/auth/screens/login_screen.dart';
import 'package:mobile/features/auth/screens/signup_screen.dart';
import 'package:mobile/features/not_found/screens/not_found_screen.dart';
import 'package:mobile/features/profile/screens/profile_screen.dart';

import '../../features/home/screens/home_screen.dart';
import '../config/main_shell.dart';

class AppRoutes {
  static final GoRouter router = GoRouter(
    initialLocation: '/',
    routes: [
      ShellRoute(
        builder: (context, state, child) =>
            MainShell(child: child, location: state.uri.path),
        routes: [
          GoRoute(
            path: '/',
            name: 'HomeScreen',
            pageBuilder: (context, state) =>
                const NoTransitionPage(child: HomeScreen()),
          ),

          GoRoute(
            path: '/profile',
            name: 'ProfileScreen',
            pageBuilder: (context, state) =>
                const NoTransitionPage(child: ProfileScreen()),
          ),
          // Thêm các route khác tại đây
        ],
      ),

      GoRoute(
        path: '/login',
        name: 'Login',
        builder: (context, state) => const LoginScreen(),
      ),

      GoRoute(
        path: '/signup',
        name: 'SignUp',
        builder: (context, state) => const SignupScreen(),
      ),
    ],
    errorBuilder: (context, state) => NotFoundScreen(),
  );
}
