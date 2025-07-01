import axios from "axios";

export const signUp = async (data) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_API}/auth/register`,
      data
    );
    return res.data;
  } catch (error) {
    console.error("Lỗi đăng ký:", error);
    throw error;
  }
};

export const signIn = async (data) => {
  console.log(data);
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_API}/auth/login`,
      data
    );

    return res.data;
  } catch (error) {
    console.error("Lỗi đăng ký:", error);
    throw error;
  }
};
