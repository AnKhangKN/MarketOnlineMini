import React from "react";
import { Wrapper } from "./style";
import { Table } from "antd";

const ProductManagement = () => {
  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Áo thun nam",
      price: "199.000đ",
      category: "Thời trang",
      status: "Đang bán",
    },
    {
      key: "2",
      name: "Giày sneaker",
      price: "750.000đ",
      category: "Giày dép",
      status: "Tạm hết",
    },
  ];

  return (
    <Wrapper>
      <div style={{ fontSize: 24, fontWeight: 600, marginBottom: 16 }}>
        Quản lý sản phẩm
      </div>
      <div
        style={{
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          padding: 16,
          background: "#fff",
        }}
      >
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 5 }}
          scroll={{ x: true }}
        />
      </div>
    </Wrapper>
  );
};

export default ProductManagement;
