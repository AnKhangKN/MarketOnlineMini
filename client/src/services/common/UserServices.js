import axios from "axios";
export const axiosJWT = axios.create();

export const getDetailUser = async (accessToken) => {
  try {
    const res = await axiosJWT.get(
      `${import.meta.env.VITE_BACKEND_API}/user/profile`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Lỗi đăng ký:", error);
    throw error;
  }
};
