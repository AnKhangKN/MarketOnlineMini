import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerLayout from "./layout/CustomerLayout/CustomerLayout.jsx";
import * as TokenUtils from "./utils/token.utils.js";
import * as UserServices from "./services/common/UserServices.js";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./store/slices/userSlice.js";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  console.log("user use selector", user);

  // Dùng interceptors sử lý token hết hạn
  UserServices.axiosJWT.interceptors.request.use(
    async (config) => {
      const token = await TokenUtils.getValidAccessToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const fetchGetDetailUser = async () => {
    try {
      const res = await UserServices.getDetailUser();

      dispatch(updateUser(res.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchGetDetailUser();
  }, []);

  return (
    <Routes>
      {routes.map((route, index) => {
        const Page = route.page;
        const Layout = route.isShowHeaderCustomer
          ? CustomerLayout
          : React.Fragment;

        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
