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
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgba(230, 0, 35, 0.2);
  }
`;
