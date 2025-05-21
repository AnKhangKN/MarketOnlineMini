import { Col, Row } from "antd";
import React from "react";
import { ContainerSearch, IconButton, MainHeader } from "./style";
import logoRmBG from "../../../assets/logo/LogoMarketOnlineMini-removebg-preview.png";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import logoDo from "../../../assets/logo/LogoMarketOnlineMiniDo.png";

const HeaderComponent = () => {
  return (
    <div
      style={{
        backgroundColor: "#d0011b",
        color: "#fff",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <Row
        className="d-md-flex d-none m-auto"
        style={{ maxWidth: "1200px", fontSize: "16px", lineHeight: "34px" }}
      >
        <Col
          className="d-flex align-items-center justify-content-start gap-3"
          span={12}
        >
          <div>Kênh bán hàng</div>
          <div>Trở thành người bán hàng</div>
          <div>Kết nối</div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-end gap-3"
          span={12}
        >
          <div>Thông báo</div>
          <div>Hỗ trợ</div>
          <div>Đăng kí</div>
          <div>Đăng nhập</div>
        </Col>
      </Row>

      <MainHeader className="d-flex align-items-center m-auto">
        <Col xs={0} sm={0} md={4} className="d-md-flex flex-column f-none">
          <div style={{ width: "60px" }}>
            <img
              style={{ width: "100%", objectFit: "cover" }}
              src={logoRmBG}
              alt=""
            />
          </div>
          <div>Market online mini</div>
        </Col>
        <Col
          xs={20}
          sm={20}
          md={16}
          style={{ paddingRight: "20px" }}
          className="d-flex flex-column gap-2"
        >
          <ContainerSearch className="d-flex align-items-center">
            <Col xs={2} sm={2} md={2}>
              <div className="d-flex align-items-center justify-content-center">
                <FiSearch />
              </div>
            </Col>
            <Col xs={19} sm={19} md={18}>
              <div>
                <input
                  className="w-100"
                  style={{ border: "none", outline: "none" }}
                  type="text"
                />
              </div>
            </Col>
            <Col xs={3} sm={3} md={4}>
              <div className="d-md-flex d-none align-items-center justify-content-center">
                <button>Tìm kiếm</button>
              </div>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: "5px",
                  cursor: "pointer",
                }}
                className="d-flex d-md-none align-items-center justify-content-center"
              >
                <img className="w-100 object-fit-cover" src={logoDo} alt="" />
              </div>
            </Col>
          </ContainerSearch>
          <div
            className="d-md-flex d-none align-items-center gap-3"
            style={{ fontSize: "12px", lineHeight: "15px" }}
          >
            <div>Kem Chống Nắng Elixir</div>
            <div>Quạt Cầm Tay Goojodoq</div>
            <div>Marshall Major V</div>
            <div>Quạt Goojodoq Sò Lạnh</div>
            <div>Kệ 9 Ngăn</div>
          </div>
        </Col>
        <Col
          xs={4}
          sm={4}
          md={4}
          className="d-flex align-items-center justify-content-center gap-4"
        >
          <IconButton>
            <HiOutlineShoppingCart />
          </IconButton>

          <IconButton className="d-md-none d-flex">
            <HiOutlineUser />
          </IconButton>
        </Col>
      </MainHeader>
    </div>
  );
};

export default HeaderComponent;
