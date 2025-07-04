import React, { useState } from "react";
import { Typography, message } from "antd";
import logo from "../../../assets/logo/LogoTrangChuDo-removebg-preview.png";
import ButtonComponent from "../../../components/customer/ButtonComponent/ButtonComponent";
import InputComponent from "../../../components/customer/InputComponent/InputComponent";
import { useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import google_logo from "../../../assets/logo/google_logo.png";
import facebook_logo from "../../../assets/logo/facebook_logo.png";
import * as AuthServices from "../../../services/common/AuthServices";
import * as UserServices from "../../../services/common/UserServices";
import {
  ButtonMethodLogin,
  ChangeMethodText,
  PageWrapper,
  ContentWrapper,
  LeftSection,
  Logo,
  Slogan,
  FormWrapper,
  BackHome,
  SocialLoginWrapper,
  EyeIcon,
} from "./style";
import { useDispatch } from "react-redux";
import { updateUser } from "../../../store/slices/userSlice";

const { Title, Text } = Typography;

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const handleBackHome = () => {
    navigate("/");
  };

  const handleLogin = async () => {
    const { email, password } = data;

    if (!email || !password) {
      message.warning("Vui lòng nhập đầy đủ email và mật khẩu!");
      return;
    }

    try {
      setLoading(true);

      const res = await AuthServices.signIn({ email, password });
      const { accessToken, message: successMsg } = res;

      localStorage.setItem("access_token", accessToken);

      const userData = await handleGetDetailUser(accessToken);

      if (userData?.isAdmin) {
        navigate("/admin/dashboard");
      } else if (userData?.isSeller) {
        navigate("/seller/dashboard");
      } else {
        navigate("/");
      }

      message.success(successMsg || "Đăng nhập thành công!");
    } catch (error) {
      message.error(error?.response?.data?.message || "Đăng nhập thất bại!");
    } finally {
      setLoading(false);
    }
  };

  const handleGetDetailUser = async (accessToken) => {
    try {
      const res = await UserServices.getDetailUser(accessToken);
      dispatch(updateUser(res.data));

      return res?.data;
    } catch (error) {
      message.error(
        error?.response?.data?.message || "Lỗi khi lấy thông tin người dùng"
      );
      return null;
    }
  };

  return (
    <>
      <BackHome onClick={handleBackHome}>← Trở lại trang chủ</BackHome>
      <PageWrapper>
        <ContentWrapper>
          <LeftSection>
            <Logo src={logo} alt="Market Online Mini" />
            <Slogan>Market Online Mini</Slogan>
            <Text strong>
              Nền tảng thương mại uy tín, nơi người bán và người mua kết nối dễ
              dàng.
            </Text>
          </LeftSection>

          <FormWrapper>
            <Title level={3} style={{ textAlign: "center", color: "#d0011b" }}>
              Đăng nhập tài khoản
            </Title>

            <InputComponent
              id="email"
              name="Email"
              value={data.email}
              onChange={handleChange}
              styleContainer={{ marginBottom: 30 }}
            />

            <div style={{ position: "relative" }}>
              <EyeIcon onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
              </EyeIcon>
              <InputComponent
                id="password"
                name="Mật khẩu"
                type={showPassword ? "text" : "password"}
                value={data.password}
                onChange={handleChange}
                styleContainer={{ marginBottom: 24 }}
              />
            </div>

            <ButtonComponent
              name="Đăng nhập"
              onClick={handleLogin}
              disabled={loading}
            />

            <ChangeMethodText>Hoặc</ChangeMethodText>

            <SocialLoginWrapper>
              <ButtonMethodLogin title="Đăng nhập Facebook">
                <img
                  className="w-100 h-100"
                  src={facebook_logo}
                  alt="Facebook"
                />
              </ButtonMethodLogin>
              <ButtonMethodLogin title="Đăng nhập Google">
                <img className="w-100 h-100" src={google_logo} alt="Google" />
              </ButtonMethodLogin>
            </SocialLoginWrapper>

            <Text
              type="secondary"
              style={{ display: "block", marginTop: 24, textAlign: "center" }}
            >
              Chưa có tài khoản?{" "}
              <span
                onClick={() => navigate("/signup")}
                style={{ color: "#d0011b", cursor: "pointer" }}
              >
                Đăng ký ngay
              </span>
            </Text>
          </FormWrapper>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default LoginPage;
