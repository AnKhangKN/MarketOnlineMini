import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:mobile/config/providers/counter_provider.dart';
import 'package:mobile/shared/widgets/custom_app_bar.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  void initState() {
    super.initState();

    // Truy cập provider sau khi frame build
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final counter = context.read<CounterProvider>();
      print("Giá trị ban đầu: ${counter.count}");
      // Có thể gọi API hoặc khởi tạo logic ở đây
    });
  }

  @override
  Widget build(BuildContext context) {
    final counter = context.watch<CounterProvider>();

    return Scaffold(
      appBar: const CustomAppBar(showBackButton: false),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            "Giá trị: ${counter.count}",
            style: const TextStyle(fontSize: 32),
          ),
          const SizedBox(height: 20),
          ElevatedButton(
            onPressed: () {
              context.read<CounterProvider>().increment();
            },
            child: const Text("Tăng giá trị"),
          ),
        ],
      ),
    );
  }
}
