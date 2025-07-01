import React from "react";
import CartItemComponent from "../../../components/customer/CartItemComponent/CartItemComponent";
import default_product from "../../../assets/product/default_product.png";

const CartPage = () => {
  const cartItems = [
    {
      shopId: "666f5002f5a3cd42ecb841a1",
      shopName: "Cửa hàng A",
      items: [
        {
          productId: "666f5119f5a3cd42ecb841b3",
          productName: "Sản phẩm 1",
          productImage: default_product,
          attributes: [
            { name: "Màu", value: "Đỏ" },
            { name: "Size", value: "M" },
          ],
          price: 150000,
          quantity: 2,
          checked: true,
          _id: "aaa111",
        },
        {
          productId: "666f5119f5a3cd42ecb841b4",
          productName: "Sản phẩm 2",
          productImage: default_product,
          attributes: [],
          price: 100000,
          quantity: 1,
          checked: false,
          _id: "aaa112",
        },
      ],
    },
    {
      shopId: "666f5002f5a3cd42ecb841a2",
      shopName: "Cửa hàng B",
      items: [
        {
          productId: "666f5223f5a3cd42ecb841c1",
          productName: "Sản phẩm 3",
          productImage: default_product,
          attributes: [{ name: "Màu", value: "Xanh" }],
          price: 200000,
          quantity: 1,
          checked: true,
          _id: "bbb223",
        },
      ],
    },
  ];

  return (
    <div style={{ width: "1200px", margin: "auto", padding: "20px" }}>
      <h2>Giỏ hàng của bạn</h2>

      {cartItems.map((shop) => (
        <div key={shop.shopId} style={{ marginBottom: "40px" }}>
          <h3>{shop.shopName}</h3>

          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: "bold",
              borderBottom: "2px solid #000",
              paddingBottom: "10px",
              backgroundColor: "#f5f5f5",
            }}
          >
            <div style={{ width: "40%" }}>
              <input type="checkbox" style={{ marginRight: "10px" }} />
              Sản phẩm
            </div>
            <div style={{ width: "15%" }}>Đơn giá</div>
            <div style={{ width: "15%" }}>Số lượng</div>
            <div style={{ width: "15%" }}>Số tiền</div>
            <div style={{ width: "15%" }}>Thao tác</div>
          </div>

          {/* Danh sách sản phẩm trong shop */}
          {shop.items.map((product) => (
            <CartItemComponent key={product._id} product={product} />
          ))}
        </div>
      ))}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#f5f5f5",
        }}
      >
        <div style={{}}>
          <input type="checkbox" style={{ marginRight: "10px" }} />
          <span>Chọn tất cả (2)</span>
          <span>Xóa</span>
        </div>
        <div>Mua ngay</div>
      </div>
    </div>
  );
};

export default CartPage;
