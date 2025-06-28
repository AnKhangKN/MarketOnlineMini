import React from "react";
import ButtonCustom from "./style";

const ButtonComponent = ({
  height,
  padding,
  width,
  name = "Button",
  bgColor,
  color,
  bdRadius,
  onClick,
  icon = null,
  iconPosition = "left",
  border,
  ...rest
}) => {
  return (
    <ButtonCustom
      height={height}
      padding={padding}
      width={width}
      bgColor={bgColor}
      color={color}
      bdRadius={bdRadius}
      border={border}
      onClick={onClick}
      {...rest}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{name}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </ButtonCustom>
  );
};

export default ButtonComponent;
