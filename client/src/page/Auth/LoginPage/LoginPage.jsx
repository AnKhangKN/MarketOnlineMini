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
import * as AuthServices from "../../../services/common/AuthServices";
import { ButtonMethodLogin, ChangeMethodText } from "./style";

const { Title, Text } = Typography;

const PageWrapper = styled.div`
  background: linear-gradient(to bottom, #fff, #ffe6e8);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

const LeftSection = styled.div`
  text-align: center;
  max-width: 400px;
`;

const Logo = styled.img`
  width: 100px;
  margin-bottom: 16px;
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

const SocialLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;

const EyeIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 14px;
  z-index: 1;
  font-size: 22px;
  cursor: pointer;
  color: #d0011b;
`;

const LoginPage = () => {
  const navigate = useNavigate();
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

  const handleLogin = async () => {
    const { email, password } = data;

    if (!email || !password) {
      message.warning("Vui lòng nhập đầy đủ email và mật khẩu!");
      return;
    }

    try {
      setLoading(true);
      await AuthServices.signIn(data); // hàm đăng nhập (gọi API)

      message.success("Đăng nhập thành công!");
      navigate("/"); // điều hướng sau khi login
    } catch (error) {
      message.error(error?.response?.data?.message || "Đăng nhập thất bại!");
    } finally {
      setLoading(false);
    }
  };

  // const handleGetDetailUser = async(id, access_token, isAdmin, isVendor) => {
  //   try {

  //     const res = await

  //   } catch (error) {
  //     message.error(error?.response?.data?.message);
  //   }
  // }

  const handleBackHome = () => {
    navigate("/");
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
              Chưa có tài khoản? <a href="/signup">Đăng ký ngay</a>
            </Text>
          </FormWrapper>
        </ContentWrapper>
      </PageWrapper>
    </>
  );
};

export default LoginPage;
