import axios from "axios";

const BASE_URL = import.meta.env.VITE_BACKEND_API;
export const axiosJWT = axios.create();

export const signUp = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/register`, data);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const signIn = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, data, {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const refreshToken = async () => {
  try {
    const res = await axios.post(
      `${BASE_URL}/auth/token/refresh`,
      {},
      { withCredentials: true }
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = async (accessToken) => {
  try {
    const res = await axios.delete(`${BASE_URL}/auth/logout`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
