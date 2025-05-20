import { Col, Row } from "antd";
import React from "react";
import logoRmBG from "../../../assets/logo/LogoMarketOnlineMini-removebg-preview.png";
import { HiOutlineSearch, HiShoppingCart, HiUser } from "react-icons/hi";

const HeaderComponent = () => {
  return (
    <div style={{ backgroundColor: "#d0011b", color: "#fff" }}>
      <div
        style={{
          maxWidth: "1440px",
          margin: "auto",
          padding: "0px 20px",
          height: "34px",
        }}
      >
        <Row className="d-md-flex d-none">
          <Col md={12}>hihi</Col>
          <Col md={12}>hihi</Col>
        </Row>
      </div>

      <div
        style={{
          maxWidth: "1440px",
          margin: "auto",
          padding: "0px 20px",
          height: "85px ",
        }}
      >
        {/* Header nội dung */}
        <Row align="middle" justify="space-between">
          {/* Logo */}
          <Col xs={0} sm={0} md={6} className="d-md-flex d-none flex-column">
            <img
              src={logoRmBG}
              alt="Market Online Mini"
              style={{
                width: "60px",
                height: "60px",
                objectFit: "contain",
                marginRight: "8px",
              }}
            />
            <div style={{ fontSize: "18px" }}>Market Online Mini</div>
          </Col>

          {/* Search */}
          <Col xs={19} sm={19} md={14}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#fff",
                height: "40px",
                padding: "4px 8px",
              }}
            >
              <input
                type="text"
                placeholder="Tìm sản phẩm..."
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  fontSize: "16px",
                }}
              />
              <button
                style={{
                  backgroundColor: "#d0011b",
                  color: "#fff",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                <HiOutlineSearch
                  style={{
                    color: "#fff",
                    fontSize: "20px",
                    marginRight: "8px",
                  }}
                />
              </button>
            </div>
          </Col>

          {/* Cart */}
          <Col xs={5} sm={5} md={4}>
            <div className="d-flex align-items-center justify-content-end gap-4">
              <div className="d-flex d-md-none">
                <HiUser style={{ fontSize: "28px" }} />
              </div>

              <div>
                <HiShoppingCart style={{ fontSize: "28px" }} />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeaderComponent;
