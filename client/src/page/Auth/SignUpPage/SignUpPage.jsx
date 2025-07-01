import React, { useState } from "react";
import { Typography, Card, message } from "antd";
import styled from "styled-components";
import logo from "../../../assets/logo/LogoTrangChuDo-removebg-preview.png";
import ButtonComponent from "../../../components/customer/ButtonComponent/ButtonComponent";
import InputComponent from "../../../components/customer/InputComponent/InputComponent";
import { useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import google_logo from "../../../assets/logo/google_logo.png";
import facebook_logo from "../../../assets/logo/facebook_logo.png";
import { ButtonMethodLogin, ChangeMethodText } from "./style";
import Password from "antd/es/input/Password";
import { ConfigConsumer } from "antd/es/config-provider";
import * as AuthServices from "../../../services/common/AuthServices";

const { Title, Text } = Typography;

const PageWrapper = styled.div`
  background: linear-gradient(to bottom, #fff, #ffe6e8);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const LeftSection = styled.div`
  text-align: center;
  max-width: 400px;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 12px;
`;

const Slogan = styled.h2`
  color: #d0011b;
  font-weight: bold;
  font-size: 24px;
`;

const FormWrapper = styled(Card)`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(208, 1, 27, 0.15);
  border: none;
`;

const SocialLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;

const BackHome = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: #d0011b;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUpPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    const { email, password, confirmPassword } = data;

    if (!email || !password || !confirmPassword) {
      message.warning("Hãy nhập đầy đủ thông tin!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      message.warning("Email không hợp lệ!");
      return;
    }

    if (password !== confirmPassword) {
      message.error("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      setLoading(true);
      await AuthServices.signUp(data);
      message.success("Đăng ký thành công!");
      navigate("/login"); // chuyển hướng sau khi đăng ký
    } catch (error) {
      message.error(error.response?.data?.message || "Đăng ký thất bại");
    } finally {
      setLoading(false);
    }
  };

  const handleBackHome = () => navigate("/");

  return (
    <>
      <BackHome onClick={handleBackHome}>← Trở lại trang chủ</BackHome>

      <PageWrapper>
        <ContentWrapper>
          <LeftSection>
            <Logo src={logo} alt="Market Online Mini" />
            <Slogan>Market Online Mini</Slogan>
            <Text strong>
              Nơi kết nối người bán & người mua trên khắp cả nước.
            </Text>
          </LeftSection>

          <FormWrapper>
            <Title level={3} style={{ textAlign: "center", color: "#d0011b" }}>
              Đăng ký tài khoản
            </Title>

            <InputComponent
              name="Email"
              id="email"
              styleContainer={{ marginBottom: 30 }}
              value={data.email}
              onChange={handleChange}
            />

            {/* Password */}
            <div style={{ position: "relative" }}>
              <div
                onClick={() => setShowPassword(!showPassword)}
                style={{
                  position: "absolute",
                  top: "4px",
                  right: "14px",
                  zIndex: 1,
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                {showPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
              </div>
              <InputComponent
                name="Mật khẩu"
                id="password"
                type={showPassword ? "text" : "password"}
                styleContainer={{ marginBottom: 30 }}
                value={data.password}
                onChange={handleChange}
              />
            </div>

            {/* Confirm password */}
            <div style={{ position: "relative" }}>
              <div
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{
                  position: "absolute",
                  top: "4px",
                  right: "14px",
                  zIndex: 1,
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                {showConfirmPassword ? <HiOutlineEyeSlash /> : <HiOutlineEye />}
              </div>
              <InputComponent
                name="Xác nhận mật khẩu"
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                styleContainer={{ marginBottom: 24 }}
                value={data.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <ButtonComponent
              name="Đăng ký"
              disabled={loading}
              onClick={handleSignUp}
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
              Đã có tài khoản? <a href="/login">Đăng nhập</a>
            </Text>
          </FormWrapper>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default SignUpPage;
