import { Col, message, Modal, Row } from "antd";
import React from "react";
import {
  ContainerSearch,
  CountProductInCart,
  IconButtonCart,
  IconButtonUser,
  ModalCart,
  MainHeader,
  ContainerInformation,
  ModalInformation,
  ItemInformation,
} from "./style";
import logoRmBG from "../../../assets/logo/LogoMarketOnlineMini-removebg-preview.png";
import { HiOutlineShoppingCart, HiOutlineUser } from "react-icons/hi2";
import { FiSearch } from "react-icons/fi";
import logoDo from "../../../assets/logo/LogoMarketOnlineMiniDo.png";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as AuthServices from "../../../services/common/AuthServices";
import * as Token from "../../../utils/token.utils";
import { resetUser } from "../../../store/slices/userSlice";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const navigation = {
    toLogin: () => navigate("/login"),
    toSignup: () => navigate("/signup"),
    toHome: () => navigate("/"),
    toCart: () => navigate("/cart"),
    toAdminDashboard: () => navigate("/admin/dashboard"),
    toSellerDashboard: () => navigate("/seller/dashboard"),
    toProfile: () => navigate("/profile"),
  };

  const handleLogout = async () => {
    try {
      const token = await Token.getValidAccessToken();

      await AuthServices.logoutUser(token);
      localStorage.removeItem("access_token"); // Chỉ xóa access_token có trong localStorage

      dispatch(resetUser());
      navigate("/");
      message.success("Đăng xuất thành công!");
    } catch (error) {
      console.log(error);
    }
  };

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
        style={{ maxWidth: "1200px", lineHeight: "34px" }}
      >
        <Col
          className="d-flex align-items-center justify-content-start gap-3"
          span={12}
          style={{ fontSize: "13px" }}
        >
          <div style={{ cursor: "pointer" }}>Kênh bán hàng</div>
          <div style={{ cursor: "pointer" }}>Trở thành người bán hàng</div>
          <div style={{ cursor: "pointer" }}>Kết nối</div>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-end gap-3"
          span={12}
          style={{ fontSize: "13px" }}
        >
          <div style={{ cursor: "pointer" }}>Thông báo</div>
          <div style={{ cursor: "pointer" }}>Hỗ trợ</div>

          {!user?.id ? (
            // Chưa đăng nhập
            <>
              <div style={{ cursor: "pointer" }} onClick={navigation.toSignup}>
                Đăng ký
              </div>
              <div style={{ cursor: "pointer" }} onClick={navigation.toLogin}>
                Đăng nhập
              </div>
            </>
          ) : (
            // Đã đăng nhập
            <ContainerInformation>
              <div>{user.fullName}</div>
              {user.isAdmin ? (
                <ModalInformation onClick={navigation.toAdminDashboard}>
                  Quay về Admin
                </ModalInformation>
              ) : user.isSeller ? (
                <ModalInformation onClick={navigation.toSellerDashboard}>
                  Quản lý Shop
                </ModalInformation>
              ) : (
                <ModalInformation>
                  <ItemInformation onClick={navigation.toProfile}>
                    Thông tin cá nhân
                  </ItemInformation>
                  <ItemInformation>Đơn hàng</ItemInformation>
                  <ItemInformation onClick={handleLogout}>
                    Đăng xuất
                  </ItemInformation>
                </ModalInformation>
              )}
            </ContainerInformation>
          )}
        </Col>
      </Row>

      <MainHeader className="d-flex align-items-center m-auto">
        <Col xs={0} sm={0} md={4} className="d-md-flex flex-column f-none">
          <div style={{ cursor: "pointer" }} onClick={navigation.toHome}>
            <div style={{ width: "60px" }}>
              <img
                style={{ width: "100%", objectFit: "cover" }}
                src={logoRmBG}
                alt=""
              />
            </div>
            <div>Market online mini</div>
          </div>
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
                  placeholder="Tìm kiếm ..."
                />
              </div>
            </Col>
            <Col xs={3} sm={3} md={4}>
              <div className="d-md-flex d-none align-items-center justify-content-center">
                <ButtonComponent
                  name="Tìm kiếm"
                  width="95%"
                  height="32px"
                  padding="0px"
                  bdRadius="2px"
                />
              </div>
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  marginLeft: "10px",
                  cursor: "pointer",
                }}
                className="d-flex d-md-none align-items-center justify-content-center"
              >
                <img className="w-100 object-fit-cover" src={logoDo} alt="" />
              </div>
            </Col>
          </ContainerSearch>
        </Col>
        <Col
          xs={4}
          sm={4}
          md={4}
          className="d-flex align-items-center justify-content-center gap-4"
        >
          <IconButtonCart>
            <CountProductInCart>99</CountProductInCart>
            <HiOutlineShoppingCart onClick={navigation.toCart} />
            <ModalCart>modal cart</ModalCart>
          </IconButtonCart>

          <IconButtonUser className="d-md-none d-flex">
            <HiOutlineUser />
          </IconButtonUser>
        </Col>
      </MainHeader>
    </div>
  );
};

export default HeaderComponent;
