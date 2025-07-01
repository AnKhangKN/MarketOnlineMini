import React from "react";

const CartItemComponent = ({ product }) => {
  const { productName, productImage, price, quantity, attributes, checked } =
    product;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 0",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div
        style={{
          width: "40%",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <input type="checkbox" defaultChecked={checked} />
        <img
          src={productImage}
          alt={productName}
          style={{ width: "60px", height: "60px", objectFit: "cover" }}
        />
        <div>
          <div>{productName}</div>
          {attributes.length > 0 && (
            <div style={{ fontSize: "12px", color: "#666" }}>
              {attributes.map((attr, idx) => (
                <span key={idx}>
                  {attr.name}: {attr.value}
                  {idx < attributes.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div style={{ width: "15%" }}>{price.toLocaleString()}₫</div>
      <div style={{ width: "15%" }}>{quantity}</div>
      <div style={{ width: "15%" }}>{(price * quantity).toLocaleString()}₫</div>
      <div style={{ width: "15%" }}>
        <button style={{ color: "red", cursor: "pointer" }}>Xóa</button>
      </div>
    </div>
  );
};

export default CartItemComponent;
