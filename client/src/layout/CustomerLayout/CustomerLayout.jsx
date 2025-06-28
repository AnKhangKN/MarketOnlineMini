import React from "react";
import HeaderComponent from "../../components/customer/HeaderComponent/HeaderComponent.jsx";
import BoxChatComponent from "../../components/customer/BoxChatComponent/BoxChatComponent.jsx";
import { Wrapper } from "./style.js";

const CustomerLayout = ({ children }) => {
  return (
    <>
      <header>
        <HeaderComponent />
      </header>
      <Wrapper>{children}</Wrapper>
      <div>
        <BoxChatComponent />
      </div>
    </>
  );
};
export default CustomerLayout;
