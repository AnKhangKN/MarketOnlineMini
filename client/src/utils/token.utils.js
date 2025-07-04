import { jwtDecode } from "jwt-decode";
import * as AuthServices from "../services/common/AuthServices";

export const getValidAccessToken = async () => {
  const token = localStorage.getItem("access_token");

  if (token) {
    const decoded = jwtDecode(token);

    if (decoded?.exp < Date.now() / 1000) {
      const res = await AuthServices.refreshToken();
      const newToken = res?.access_token;

      if (newToken) {
        localStorage.setItem("access_token", newToken);
        return newToken;
      }
      return null;
    }

    return token;
  }

  return null;
};
