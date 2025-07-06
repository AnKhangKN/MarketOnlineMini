import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { useSelector } from "react-redux";

const HeaderComponent = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(true);
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    setIsOpen(!isOpen);
    toggleSidebar();
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
      <div className="d-flex align-items-center" style={{ lineHeight: "60px" }}>
        <div>
          <img src="" alt="" />
        </div>
        <div>{user.fullName}</div>
      </div>
    </div>
  );
};

export default HeaderComponent;
