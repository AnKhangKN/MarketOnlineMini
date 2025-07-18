import React, { useState } from "react";
import SidebarComponent from "../../components/admin/SidebarComponent/SidebarComponent";
import HeaderComponent from "../../components/admin/HeaderComponent/HeaderComponent";

const AdminLayout = ({ children }) => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  return (
    <div className="d-flex">
      <SidebarComponent isShowSidebar={isShowSidebar} />

      <div className="w-100">
        <HeaderComponent
          toggleSidebar={() => setIsShowSidebar((prev) => !prev)}
        />

        <div>{children}</div>
        {/* <div>footer component</div> */}
      </div>
    </div>
  );
};

export default AdminLayout;
