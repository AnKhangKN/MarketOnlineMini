import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 55px;
  z-index: 1000;
`;

// Nút Chat
export const ModalComponent = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px 15px;
  border-radius: 30px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  color: #d0011b;
  font-weight: 600;
`;

// Modal chat với hiệu ứng
export const ModalComponentOpen = styled.div`
  width: 600px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px 5px 0px 0px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  position: fixed;
  bottom: 0px;
  right: 20px;
  z-index: 11;

  &.open {
    opacity: 1;
    transform: translateY(0);
  }

  &.close {
    opacity: 0;
    transform: translateY(20px);
  }
`;
