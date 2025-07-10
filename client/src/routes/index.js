import LoginPage from "../page/Auth/LoginPage/LoginPage.jsx";
import SignUpPage from "../page/Auth/SignUpPage/SignUpPage";
import CategoryPage from "../page/customer/CategoryPage/CategoryPage.jsx";
import CartPage from "../page/customer/CartPage/CartPage.jsx";
import HomePage from "../page/customer/HomePage/HomePage.jsx";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage.jsx";
import DashboardSeller from "../page/seller/Dashboard/Dashboard.jsx";
import DashboardAdmin from "../page/admin/Dashboard/Dashboard.jsx";
import ProductManagementSeller from "../page/seller/ProductManagement/ProductManagement.jsx";
import SignUpShopPage from "../page/Auth/SignUpShopPage/SignUpShopPage.jsx";

export const routes = [
  // authentication
  {
    path: "/login",
    page: LoginPage,
  },
  {
    path: "/signup",
    page: SignUpPage,
  },

  {
    path: "/register-seller",
    page: SignUpShopPage,
  },

  // customer
  {
    path: "/",
    page: HomePage,
    isShowHeaderCustomer: true,
  },
  {
    path: "/category/:name/:id",
    page: CategoryPage,
    isShowHeaderCustomer: true,
  },
  {
    path: "/cart",
    page: CartPage,
    isShowHeaderCustomer: true,
  },

  // seller
  {
    path: "seller/dashboard",
    page: DashboardSeller,
    isSellerLayout: true,
  },
  {
    path: "seller/products",
    page: ProductManagementSeller,
    isSellerLayout: true,
  },

  // admin
  {
    path: "/admin/dashboard",
    page: DashboardAdmin,
    isAdminLayout: true,
  },

  // not found page
  {
    path: "*",
    page: NotFoundPage,
  },
];
