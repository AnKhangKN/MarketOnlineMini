import React from "react";

const ButtonComponent = ({
  height = "auto",
  width = "auto",
  name = "Button",
  bgColor = "#d0011b",
  color = "#fff",
  bdRadius = "2px",
  onClick,
}) => {
  return (
    <button
      style={{
        height,
        width,
        backgroundColor: bgColor,
        color,
        borderRadius: bdRadius,
        border: "none",
        outline: "none",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ButtonComponent;
