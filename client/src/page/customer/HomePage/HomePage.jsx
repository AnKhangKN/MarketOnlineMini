import { Col, Row } from "antd";
import React from "react";
import logoDo from "../../../assets/logo/LogoMarketOnlineMiniDo.png";
import { ItemCategory, TitleCategory, WrapperComponent } from "./style";
import SuggestionToday from "../../../components/customer/SuggestionToday/SuggestionToday";

const HomePage = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#f5f5fa",
          marginTop: "119px",
        }}
      >
        <Row
          style={{
            maxWidth: "1200px",
            margin: "auto",
            padding: "16px 0px",
          }}
        >
          <Col md={5}>
            <div
              className="me-4"
              style={{
                padding: "10px 8px",
                position: "sticky",
                top: 135,
                zIndex: 10,
                backgroundColor: "#fff",
                borderRadius: "12px",
              }}
            >
              <div style={{ fontWeight: "bold" }}>Danh mục</div>
              <ItemCategory>
                <div style={{ width: "50px" }}>
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={logoDo}
                    alt=""
                  />
                </div>
                <TitleCategory>
                  Tên danh mục dfdfsfsfsfssfsfsffsdfsfsfsfsfsfsfsdf
                </TitleCategory>
              </ItemCategory>
              <ItemCategory>
                <div style={{ width: "50px" }}>
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={logoDo}
                    alt=""
                  />
                </div>
                <TitleCategory>Tên danh mục</TitleCategory>
              </ItemCategory>
              <ItemCategory>
                <div style={{ width: "50px" }}>
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={logoDo}
                    alt=""
                  />
                </div>
                <TitleCategory>Tên danh mục</TitleCategory>
              </ItemCategory>
              <ItemCategory>
                <div style={{ width: "50px" }}>
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src={logoDo}
                    alt=""
                  />
                </div>
                <TitleCategory>Tên danh mục</TitleCategory>
              </ItemCategory>
            </div>
          </Col>
          <Col md={19}>
            <WrapperComponent>slide</WrapperComponent>
            <WrapperComponent>
              <div>Top deal</div>
              <div>Mã giảm giá</div>
              <div></div>
              <div></div>
              <div></div>
            </WrapperComponent>
            <WrapperComponent>
              <div>Flash sale</div>
            </WrapperComponent>
            <WrapperComponent>
              <div>Tìm kiếm hàng đầu</div>
            </WrapperComponent>
            <WrapperComponent>
              <SuggestionToday />
            </WrapperComponent>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default HomePage;
