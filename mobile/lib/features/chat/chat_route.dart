import 'package:go_router/go_router.dart';
import 'package:mobile/features/chat/view/chat_screen.dart';

final List<GoRoute> chatRoutes = [
  GoRoute(
    path: '/chat',
    name: 'chat',
    pageBuilder: (context, state) =>
        const NoTransitionPage(child: ChatScreen()),
  ),
];
