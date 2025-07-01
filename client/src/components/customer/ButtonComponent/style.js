import styled from "styled-components";

const ButtonCustom = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "height",
      "padding",
      "width",
      "bgColor",
      "color",
      "bdRadius",
      "border",
    ].includes(prop),
})`
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "100%"};
  padding: ${({ padding }) => padding || "10px 10px"};
  background-color: ${({ bgColor }) => bgColor || "#d0011b"};
  border: ${({ border }) => border || "none"};
  color: ${({ color }) => color || "#fff"};
  border-radius: ${({ bdRadius }) => bdRadius || "8px"};
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: #e60023;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 4px 12px rgba(230, 0, 35, 0.3);
  }

  &:active {
    background-color: #e60023;
    transform: translateY(0px) scale(1);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default ButtonCustom;
