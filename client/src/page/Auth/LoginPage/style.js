import { Card } from "antd";
import styled from "styled-components";

export const ChangeMethodText = styled.div`
  position: relative;
  margin: 20px auto;
  text-align: center;

  &::after {
    position: absolute;
    background-color: #333;
    content: "";
    height: 0.5px;
    width: 80px;
    top: 50%;
    right: 35px;
  }

  &::before {
    position: absolute;
    background-color: #333;
    content: "";
    height: 0.5px;
    width: 80px;
    top: 50%;
    left: 35px;
  }
`;

export const ButtonMethodLogin = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 5px;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 20px rgba(230, 0, 35, 0.3);
  }

  &:active {
    transform: scale(1);
    box-shadow: 0 2px 6px rgba(230, 0, 35, 0.2);
  }
`;

export const PageWrapper = styled.div`
  background: linear-gradient(to bottom, #fff, #ffe6e8);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 80px;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  width: 100%;
`;

export const LeftSection = styled.div`
  text-align: center;
  max-width: 400px;
`;

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 16px;
`;

export const Slogan = styled.h2`
  color: #d0011b;
  font-weight: bold;
  font-size: 24px;
`;

export const FormWrapper = styled(Card)`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(208, 1, 27, 0.15);
  border: none;
`;

export const BackHome = styled.div`
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

export const SocialLoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 24px;
`;

export const EyeIcon = styled.div`
  position: absolute;
  top: 8px;
  right: 14px;
  z-index: 1;
  font-size: 22px;
  cursor: pointer;
  color: #d0011b;
`;
