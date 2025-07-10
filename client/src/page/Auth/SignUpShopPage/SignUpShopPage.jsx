import React, { useState } from "react";
import InputComponent from "../../../components/seller/InputComponent/InputComponent";
import TextAreaComponent from "../../../components/seller/TextAreaComponent/TextAreaComponent";
import ButtonComponent from "../../../components/seller/ButtonComponent/ButtonComponent";
import { message } from "antd";
import * as ShopServices from "../../../services/seller/ShopServices";
import * as ValidateToken from "../../../utils/token.utils";
import { useNavigate } from "react-router-dom";

const SignUpShopPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    shopName: "",
    description: "",
    city: "",
    address: "",
    phone: "",
    avatarShop: null,
  });
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (files) {
      setFormData((prev) => ({ ...prev, avatarShop: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async () => {
    const { shopName, description, city, address, phone, avatarShop } =
      formData;

    if (
      !shopName ||
      !description ||
      !city ||
      !address ||
      !phone ||
      !avatarShop
    ) {
      return message.error("Vui lòng nhập đầy đủ thông tin bắt buộc.");
    }

    if (!isChecked) {
      return message.warning("Vui lòng đồng ý với các điều khoản.");
    }

    const formToSubmit = new FormData();
    for (const key in formData) {
      formToSubmit.append(key, formData[key]);
    }

    try {
      const token = await ValidateToken.getValidAccessToken();
      if (!token) return message.error("Phiên đăng nhập đã hết hạn!");

      const res = await ShopServices.createShop(formToSubmit, token);

      if (res) {
        message.success("Đăng ký shop thành công, vui lòng chờ xét duyệt!");

        setFormData({
          shopName: "",
          description: "",
          city: "",
          address: "",
          phone: "",
          avatarShop: null,
        });

        navigate("/seller/dashboard");
        window.location.reload();
      }
    } catch (err) {
      console.log("Đăng ký thất bại:", err);
      const errorMessage = err?.response?.data?.message || "Đăng ký thất bại!";
      message.error(errorMessage);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: "40px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: 24 }}>Đăng ký Shop</h2>

      <div>
        <label>Ảnh đại diện shop</label>
        <input type="file" name="avatarShop" onChange={handleChange} />

        <InputComponent
          name="Tên shop"
          id="shopName"
          value={formData.shopName}
          onChange={handleChange}
        />

        <TextAreaComponent
          name="Mô tả shop"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />

        <InputComponent
          name="Thành phố"
          id="city"
          value={formData.city}
          onChange={handleChange}
        />

        <InputComponent
          name="Địa chỉ"
          id="address"
          value={formData.address}
          onChange={handleChange}
        />

        <InputComponent
          name="Số điện thoại"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <div className="d-flex align-items-center gap-3 my-3">
          <input
            type="checkbox"
            id="terms"
            checked={isChecked}
            onChange={() => setIsChecked((prev) => !prev)}
          />
          <label htmlFor="terms">
            Tôi đồng ý với các điều khoản của chúng tôi.
          </label>
        </div>

        <ButtonComponent name="Đăng ký Shop" onClick={handleSubmit} />
      </div>
    </div>
  );
};

export default SignUpShopPage;
