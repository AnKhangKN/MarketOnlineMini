import styled from "styled-components";
import { Row } from "antd";

// MAIN HEADER
export const MainHeader = styled(Row)`
  max-width: 1200px;
  height: 85px;
  @media screen and (max-width: 767px) {
    height: 60px;
    padding: 0px 20px;
  }
`;

// MODAL CART - declare first
export const ModalCart = styled.div`
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 100%;
  right: -85px;
  background-color: white;
  color: #333;
  border: 1px solid #ddd;
  padding: 16px;
  min-width: 250px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  transform: translateY(-10px);
  z-index: 100;
`;

// ICON BUTTON CART
export const IconButtonCart = styled.div`
  font-size: 30px;
  position: relative;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    font-size: 25px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover ${ModalCart} {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
`;

// COUNT ON CART
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
  color: white;
  align-items: center;
  justify-content: center;
`;

// ICON BUTTON USER
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

// SEARCH BOX
export const ContainerSearch = styled(Row)`
  height: 40px;
  background-color: #fff;
  color: #333;
  border-radius: 2px;

  @media screen and (max-width: 767px) {
    height: 30px;
  }
`;
