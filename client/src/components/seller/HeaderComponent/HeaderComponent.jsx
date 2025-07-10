import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { InfoContainer, InfoItemModal, InfoModal } from "./style";
import * as AuthServices from "../../../services/common/AuthServices";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { resetUser } from "../../../store/slices/userSlice";

const HeaderComponent = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(true);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    setIsOpen(!isOpen);
    toggleSidebar();
  };

  const handleLogout = async () => {
    try {
      const res = await AuthServices.logoutUser();

      if (res) {
        message.success("Đăng xuất thành công!");
        dispatch(resetUser());
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-between px-4"
      style={{ backgroundColor: "#ff8f8f", height: "60px" }}
    >
      <div
        style={{ cursor: "pointer" }}
        className="d-flex align-items-center justify-content-center"
        onClick={handleClick}
      >
        {isOpen ? <FaBars size={20} /> : <FaBarsStaggered size={20} />}
      </div>
      <InfoContainer
        className="d-flex align-items-center"
        style={{ lineHeight: "60px" }}
      >
        <div>
          <img src="" alt="" />
        </div>
        <div>{user.fullName}</div>

        <InfoModal>
          <InfoItemModal onClick={() => navigate("/")}>
            Quay về trang chủ
          </InfoItemModal>
          <InfoItemModal>Thông tin cá nhân</InfoItemModal>
          <InfoItemModal onClick={handleLogout}>Đăng xuất</InfoItemModal>
        </InfoModal>
      </InfoContainer>
    </div>
  );
};

export default HeaderComponent;
