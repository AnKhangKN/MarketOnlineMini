import axios from "axios";

export const createShop = async (data, accessToken) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_API}/seller/shops`,
      data,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "multipart/form-data", // upload ảnh
        },
      }
    );
    return res.data;
  } catch (error) {
    console.log("Lỗi tạo shop:", error);
    throw error;
  }
};
