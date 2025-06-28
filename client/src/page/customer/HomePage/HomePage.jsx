import { Col, Row } from "antd";
import React from "react";
import { WrapperComponent } from "./style";
import SuggestionToday from "../../../components/customer/SuggestionToday/SuggestionToday";
import SlideComponent from "../../../components/customer/SlideComponent/SlideComponent";
import CategoryComponent from "../../../components/customer/CategoryComponent/CategoryComponent";

const HomePage = () => {
  return (
    <>
      <Row
        style={{
          maxWidth: "1200px",
          margin: "auto",
          padding: "16px 0px",
        }}
      >
        <Col xs={0} sm={0} md={24} lg={5}>
          <div
            className="me-3 d-lg-block d-none"
            style={{
              padding: "10px 8px",
              position: "sticky",
              top: "150px",
              zIndex: 10,
              backgroundColor: "#fff",
              borderRadius: "5px",
            }}
          >
            <CategoryComponent />
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={19}>
          {/* slide */}
          <WrapperComponent>
            <SlideComponent />
          </WrapperComponent>

          {/* category item */}
          <WrapperComponent>
            <div>Top deal</div>
            <div>Mã giảm giá</div>
            <div></div>
            <div></div>
            <div></div>
          </WrapperComponent>

          {/* category */}
          <WrapperComponent className="d-flex d-lg-none">
            <div>Danh mục</div>
            <div>Mã giảm giá</div>
            <div></div>
            <div></div>
            <div></div>
          </WrapperComponent>

          {/* flash sale */}
          <WrapperComponent>
            <div>Flash sale</div>
          </WrapperComponent>
          <WrapperComponent>
            <div>Tìm kiếm hàng đầu</div>
          </WrapperComponent>

          {/* suggest */}
          <WrapperComponent>
            <SuggestionToday />
          </WrapperComponent>
        </Col>
      </Row>
    </>
  );
};

export default HomePage;
