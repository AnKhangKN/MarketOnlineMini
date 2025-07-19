import 'package:dio/dio.dart';
import 'package:flutter_dotenv/flutter_dotenv.dart';

class AuthServices {
  final Dio _dio = Dio(
    BaseOptions(
      baseUrl: dotenv.env['BASE_URL'] ?? 'http://localhost:5050/api',
      connectTimeout: Duration(seconds: 10),
      receiveTimeout: Duration(seconds: 10),
      headers: {'Content-Type': 'application/json'},
    ),
  );

  Future<String> login(String email, String password)async {
    try {
      final res = await _dio.post('/auth/login');

      if (res.statusCode == 200) {
        final token = res.data['access_token'];

        return token;
      } else {
        throw Exception(res.data['message'] ?? 'Đăng nhập thất bại');
      }
    } on DioException catch (error) {
      final errorMessage = error.response?.data['message'] ?? error.message;
      throw Exception('Lỗi đăng nhập: $errorMessage');
    }
  }
}