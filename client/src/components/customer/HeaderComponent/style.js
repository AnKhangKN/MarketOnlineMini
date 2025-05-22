import styled from "styled-components";
import { Row } from "antd";

export const MainHeader = styled(Row)`
  max-width: 1200px;
  height: 85px;
  @media screen and (max-width: 767px) {
    height: 60px;
    padding: 0px 20px;
  }
`;

export const IconButton = styled.div`
  font-size: 30px;
  position: relative;
  @media screen and (max-width: 767px) {
    font-size: 25px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const CountProductInCart = styled.div`
  position: absolute;
  top: 0px;
  right: -8px;
  border-radius: 50%;
  font-size: 10px;
  width: 20px;
  height: 20px;
  display: flex;
  background-color: #333;
  align-items: center;
  justify-content: center;
`;

export const IconButtonUser = styled.div`
  font-size: 30px;
  @media screen and (max-width: 767px) {
    font-size: 25px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerSearch = styled(Row)`
  height: 40px;
  background-color: #fff;
  color: #333;
  border-radius: 2px;
  @media screen and (max-width: 767px) {
    height: 30px;
  }
`;
