import React from "react";
import HeaderComponent from "../../components/customer/HeaderComponent/HeaderComponent.jsx";
import BoxChatComponent from "../../components/customer/BoxChatComponent/BoxChatComponent.jsx";

const CustomerLayout = ({ children }) => {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <main>{children}</main>
      <div>
        <BoxChatComponent />
      </div>
    </>
  );
};
export default CustomerLayout;
