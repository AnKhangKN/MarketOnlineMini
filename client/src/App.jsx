import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomerLayout from "./layout/CustomerLayout/CustomerLayout.jsx";
import * as TokenUtils from "./utils/token.utils.js";
import * as UserServices from "./services/common/UserServices.js";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "./store/slices/userSlice.js";
import NotFoundPage from "./page/NotFoundPage/NotFoundPage.jsx";
import AdminLayout from "./layout/AdminLayout/AdminLayout.jsx";
import SellerLayout from "./layout/SellerLayout/SellerLayout.jsx";

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

  useEffect(() => {
    const fetchGetDetailUser = async () => {
      const token = await TokenUtils.getValidAccessToken();
      if (!token) return;

      try {
        const res = await UserServices.getDetailUser();
        dispatch(updateUser(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    // const fetchGetAllCart = async () => {
    //   const token = await TokenUtils.getValidAccessToken();
    //   if (!token) return;

    //   try {

    //   } catch (error) {

    //   }
    // }

    fetchGetDetailUser();
  }, [dispatch]);

  return (
    <Routes>
      {routes.map((route, index) => {
        const Page = route.page;

        let Layout = React.Fragment;

        if (route.isAdminLayout) {
          Layout = AdminLayout;
        } else if (route.isShowHeaderCustomer) {
          Layout = CustomerLayout;
        } else if (route.isSellerLayout) {
          Layout = SellerLayout;
        }

        const checkAuth =
          (!route.isAdminLayout || (route.isAdminLayout && user.isAdmin)) &&
          (!route.isSellerLayout || (route.isSellerLayout && user.isSeller));

        return (
          <Route
            key={index}
            path={route.path}
            element={
              checkAuth ? (
                <Layout>
                  <Page />
                </Layout>
              ) : (
                <NotFoundPage />
              )
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
