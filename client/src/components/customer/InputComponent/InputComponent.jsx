import React from "react";

const InputComponent = ({
  type = "text",
  placeholder = "Nhập nội dung...",
  value,
  onChange,
  height = "35px",
  width = "100%",
  padding = "0 10px",
  borderRadius = "5px",
  border = "1px solid #ccc",
  icon = null,
  iconPosition = "left", // hoặc 'right'
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height,
        width,
        border,
        borderRadius,
        padding,
        backgroundColor: "#fff",
      }}
    >
      {icon && iconPosition === "left" && (
        <span style={{ marginRight: "5px" }}>{icon}</span>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          flex: 1,
          border: "none",
          outline: "none",
          height: "100%",
        }}
      />
      {icon && iconPosition === "right" && (
        <span style={{ marginLeft: "5px" }}>{icon}</span>
      )}
    </div>
  );
};

export default InputComponent;
