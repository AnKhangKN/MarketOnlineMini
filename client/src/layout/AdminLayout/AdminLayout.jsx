import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <div className="d-flex">
      <div>side bar</div>
      <div>
        <div>header component</div>
        <div>{children}</div>
        <div>footer component</div>
      </div>
    </div>
  );
};

export default AdminLayout;
