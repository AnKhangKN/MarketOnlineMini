import React, { useState } from "react";
import { ModalComponent, ModalComponentOpen, Wrapper } from "./style";
import { HiChatBubbleLeftRight, HiOutlineChevronDown } from "react-icons/hi2";
import { Col, Row } from "antd";
import { FiSearch } from "react-icons/fi";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { RiSendPlaneFill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import InputComponent from "../InputComponent/InputComponent";

const BoxChatComponent = () => {
  const [modal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // api chat
  const users = ["admin", "vendor", "customer", "Khang"];

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
                <div className="d-flex flex-column gap-3">
                  <div
                    className="d-flex align-items-center justify-content-between ps-2 pe-2"
                    style={{
                      backgroundColor: "#fff",
                      borderRadius: "5px",
                      height: "25px",
                    }}
                  >
                    <div className="d-flex align-items-center justify-content-center">
                      <FiSearch />
                    </div>
                    <input
                      style={{ border: "none", outline: "none", width: "90%" }}
                      type="text"
                    />
                  </div>

                  <select
                    className="w-100"
                    style={{
                      outline: "none",
                      height: "25px",
                      borderRadius: "5px",
                    }}
                  >
                    <option value="all">Tất cả</option>
                    <option value="read">Đã đọc</option>
                    <option value="unread">Chưa đọc</option>
                  </select>

                  <div>
                    {users.map((user) => (
                      <div
                        key={user}
                        onClick={() => setSelectedUser(user)}
                        style={{
                          padding: "5px 10px",
                          cursor: "pointer",
                          backgroundColor:
                            selectedUser === user ? "#d9d9d9" : "transparent",
                          borderRadius: "5px",
                          marginBottom: "5px",
                        }}
                      >
                        {user}
                      </div>
                    ))}
                  </div>
                </div>
              </Col>
              <Col className="p-2" md={16}>
                {selectedUser ? (
                  <div>
                    <h5>Đang chat với: {selectedUser}</h5>
                    {/* Phần này bạn có thể thay bằng component ChatDetail nếu có */}
                    <div
                      style={{
                        border: "1px solid #ccc",
                        height: "300px",
                        padding: "10px",
                      }}
                    >
                      <div>(Nội dung chat ở đây)</div>
                    </div>

                    <div className="d-flex flex-column gap-4 mt-3">
                      <InputComponent icon={<HiChatBubbleLeftRight />} />

                      <div className="d-flex align-items-center justify-content-end gap-3">
                        <ButtonComponent
                          icon={<IoCloseSharp />}
                          iconPosition="right"
                          name="Hủy"
                          width="90px"
                          height="30px"
                          bgColor="#fff"
                          color="#333"
                          border="0.5px solid #8f8f8f"
                        />

                        <ButtonComponent
                          icon={<RiSendPlaneFill />}
                          iconPosition="right"
                          name="Gửi"
                          width="90px"
                          height="30px"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>Chọn người để bắt đầu chat</div>
                )}
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
