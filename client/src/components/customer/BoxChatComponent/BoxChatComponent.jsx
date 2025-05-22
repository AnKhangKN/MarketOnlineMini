import React, { useState } from "react";
import { ModalComponent, ModalComponentOpen, Wrapper } from "./style";
import { HiChatBubbleLeftRight, HiOutlineChevronDown } from "react-icons/hi2";
import { Col, Row } from "antd";
import { FiSearch } from "react-icons/fi";

const BoxChatComponent = () => {
  const [modal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleOpenChat = () => {
    setModal(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const handleCloseChat = () => {
    setIsVisible(false);
    setTimeout(() => setModal(false), 300);
  };

  return (
    <>
      <Wrapper>
        {modal ? (
          <ModalComponentOpen className={isVisible ? "open" : "close"}>
            <div
              style={{ borderBottom: "0.5px solid #f3f3f3" }}
              className="d-flex align-items-center justify-content-between p-2"
            >
              <div>Chat</div>
              <div style={{ cursor: "pointer" }} onClick={handleCloseChat}>
                <HiOutlineChevronDown />
              </div>
            </div>

            <Row>
              <Col
                className="p-2"
                style={{
                  backgroundColor: "#f3f3f3",
                  height: "100vh",
                }}
                md={8}
              >
                <div>
                  <div
                    className="d-flex align-items-center justify-content-between ps-2 pe-2"
                    style={{ backgroundColor: "#fff", borderRadius: "5px" }}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <FiSearch />
                    </div>
                    <input
                      style={{ border: "none", outline: "none", width: "90%" }}
                      type="text"
                    />
                  </div>

                  <select>
                    <option value="all">Tất cả</option>
                    <option value="read">Đã đọc</option>
                    <option value="unread">Chưa đọc</option>
                  </select>
                </div>
              </Col>
              <Col className="p-2" md={16}>
                col-12
              </Col>
            </Row>
          </ModalComponentOpen>
        ) : (
          <ModalComponent onClick={handleOpenChat}>
            <div>
              <HiChatBubbleLeftRight />
            </div>
            <div>Chat</div>
          </ModalComponent>
        )}
      </Wrapper>
    </>
  );
};

export default BoxChatComponent;
