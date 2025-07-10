import React from "react";
import {
  TbBoxMultipleFilled,
  TbLayoutDashboardFilled,
  TbUserFilled,
} from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import LogoRmBg from "../../../assets/logo/LogoTrangChuDo-removebg-preview.png";

const SidebarComponent = ({ isShowSidebar }) => {
  const navigate = useNavigate();

  const textStyle = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    transition: "width 0.3s",
    width: isShowSidebar ? "160px" : "0px", // <-- chỉ thay đổi chiều rộng
    opacity: isShowSidebar ? 1 : 0,
  };

  return (
    <div
      style={{
        backgroundColor: "#ccc",
        width: isShowSidebar ? "300px" : "80px",
        transition: "width 0.3s",
        overflow: "hidden",
      }}
    >
      <div style={{ height: "100vh" }}>
        <div
          className="d-flex align-items-center p-2 cursor-pointer"
          onClick={() => navigate("/seller/dashboard")}
        >
          <div
            style={{ width: "50px" }}
            className="d-flex align-items-center justify-content-center me-2"
          >
            <img
              className="w-100 h-100 object-fit-cover"
              src={LogoRmBg}
              alt=""
            />
          </div>
          <div style={textStyle}>market mini online</div>
        </div>

        <div
          className="d-flex align-items-center p-2 cursor-pointer"
          onClick={() => navigate("/seller/dashboard")}
        >
          <div
            style={{ width: "50px" }}
            className="d-flex align-items-center justify-content-center me-2"
          >
            <TbLayoutDashboardFilled size={20} />
          </div>
          <div style={textStyle}>Dashboard</div>
        </div>

        <div
          className="d-flex align-items-center p-2 cursor-pointer"
          onClick={() => navigate("/seller/user")}
        >
          <div
            style={{ width: "50px" }}
            className="d-flex align-items-center justify-content-center me-2"
          >
            <TbUserFilled size={20} />
          </div>
          <div style={textStyle}>User management</div>
        </div>

        <div
          className="d-flex align-items-center p-2 cursor-pointer"
          onClick={() => navigate("/seller/products")}
        >
          <div
            style={{ width: "50px" }}
            className="d-flex align-items-center justify-content-center me-2"
          >
            <TbBoxMultipleFilled size={20} />
          </div>
          <div style={textStyle}>Product management</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarComponent;
