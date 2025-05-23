import React from "react";

const ButtonComponent = ({
  height = "auto",
  width = "auto",
  name = "Button",
  bgColor = "#d0011b",
  color = "#fff",
  bdRadius = "2px",
  onClick,
  icon = null,
  iconPosition = "left", // hoặc "right"
  border = "none",
}) => {
  return (
    <button
      style={{
        height,
        width,
        backgroundColor: bgColor,
        border,
        color,
        borderRadius: bdRadius,
        outline: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{name}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default ButtonComponent;
