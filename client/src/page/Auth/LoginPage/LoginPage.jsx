import React, { useState } from "react";
import { Input, Typography, Button, Card } from "antd";
import styled from "styled-components";
import logo from "../../../assets/logo/LogoTrangChuDo-removebg-preview.png";
import ButtonComponent from "../../../components/customer/ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import InputComponent from "../../../components/customer/InputComponent/InputComponent";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";

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

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <>
      <BackHome onClick={handleBackHome}>← Trở lại trang chủ</BackHome>
      <PageWrapper>
        <ContentWrapper>
          {/* Bên trái: Logo + Slogan */}
          <LeftSection>
            <Logo src={logo} alt="Market Online Mini" />
            <Slogan>Market Online Mini</Slogan>
            <Text strong>
              Nền tảng thương mại uy tín, nơi người bán và người mua kết nối dễ
              dàng.
            </Text>
          </LeftSection>

          {/* Bên phải: Form */}
          <FormWrapper>
            <Title level={3} style={{ textAlign: "center", color: "#d0011b" }}>
              Đăng nhập tài khoản
            </Title>

            <InputComponent
              id="Email"
              name="Email"
              styleContainer={{ marginBottom: 30 }}
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
                id="Password"
                type={showPassword ? "text" : "password"}
                styleContainer={{ marginBottom: 24 }}
              />
            </div>

            <ButtonComponent name="Đăng nhập" />

            <Text type="secondary" style={{ display: "block", marginTop: 20 }}>
              Chưa có tài khoản? <a href="/signup">Đăng ký ngay</a>
            </Text>
          </FormWrapper>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default LoginPage;
