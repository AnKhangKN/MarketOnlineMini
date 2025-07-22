import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class ProfileScreen extends StatefulWidget {
  const ProfileScreen({super.key});

  @override
  State<ProfileScreen> createState() => _ProfileScreenState();
}

class _ProfileScreenState extends State<ProfileScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(

      body: SafeArea(
        child: ListView(
          children: [
            Stack(
              clipBehavior: Clip.none,
              // Cho phép widget con lấn ra ngoài cho position nổi lên
              children: [
                Container(
                  width: double.infinity,
                  height: 250,
                  decoration: BoxDecoration(
                    image: DecorationImage(
                      image: NetworkImage(
                        'https://th.bing.com/th/id/R.8124f887824be033b0f103ba7c0650fb?rik=TGa71od4KhLxqw&riu=http%3a%2f%2fimg02.deviantart.net%2fb1da%2fi%2f2006%2f023%2f7%2f9%2fcapybara_swimming_by_henrieke.jpg&ehk=gNmSSh7U%2fscxQgqEU%2bb6GAbaWefl48MA4REMlo0mzCQ%3d&risl=&pid=ImgRaw&r=0',
                      ),
                      fit: BoxFit.cover,
                    ),
                    borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(15),
                      bottomRight: Radius.circular(15),
                    ),
                  ),
                ),
                Positioned(
                  bottom: -70,
                  left: 0,
                  right: 0,
                  child: Center(
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.white, // bo viền trắng
                        shape: BoxShape.circle,
                      ),
                      padding: EdgeInsets.all(10),
                      // độ dày viền trắng
                      child: CircleAvatar(
                        radius: 70.0,
                        backgroundImage: NetworkImage(
                          'https://cdn.pixabay.com/photo/2023/05/30/15/42/capybara-8028980_1280.jpg',
                        ),
                        backgroundColor: Colors.grey[200],
                      ),
                    ),
                  ),
                ),
              ],
            ),

            SizedBox(height: 150),

            Padding(
              padding: EdgeInsets.all(16.0),
              child: Row(
                children: [
                  Expanded(
                    child: Material(
                      color: Colors.red,
                      borderRadius: BorderRadius.circular(20),
                      child: InkWell(
                        borderRadius: BorderRadius.circular(20),
                        onTap: () {
                          context.pushNamed('updateProfile');
                        },
                        child: Container(
                          height: 85,
                          alignment: Alignment.center,
                          child: Text("Thông tin"),
                        ),
                      ),
                    ),
                  ),

                  SizedBox(width: 10),

                  Expanded(
                    child: Container(
                      height: 85,
                      decoration: BoxDecoration(
                        color: Colors.green,
                        borderRadius: BorderRadius.all(Radius.circular(20)),
                      ),
                      child: Center(child: Text("Gio hang")),
                    ),
                  ),

                  SizedBox(width: 10),

                  Expanded(
                    child: Container(
                      height: 85,
                      decoration: BoxDecoration(
                        color: Colors.blue,
                        borderRadius: BorderRadius.all(Radius.circular(20)),
                      ),
                      child: Center(child: Text("Lich su")),
                    ),
                  ),

                  SizedBox(width: 10),

                  Expanded(
                    child: Container(
                      height: 85,
                      decoration: BoxDecoration(
                        color: Colors.orange,
                        borderRadius: BorderRadius.all(Radius.circular(20)),
                      ),
                      child: Center(child: Text("Yeu thich")),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
