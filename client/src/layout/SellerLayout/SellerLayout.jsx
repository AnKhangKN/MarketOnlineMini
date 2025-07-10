import React, { useState } from "react";
import SidebarComponent from "../../components/seller/SidebarComponent/SidebarComponent";
import HeaderComponent from "../../components/seller/HeaderComponent/HeaderComponent";

const SellerLayout = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  return (
    <div className="d-flex">
      <SidebarComponent isShowSidebar={isShowSidebar} />

      <div className="w-100">
        <HeaderComponent
          toggleSidebar={() => setIsShowSidebar((prev) => !prev)}
        />

        <div style={{ margin: "24px" }}>{children}</div>
        {/* <div>footer component</div> */}
      </div>
    </div>
  );
};

export default SellerLayout;
