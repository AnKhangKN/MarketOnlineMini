import LoginPage from "../page/Auth/LoginPage/LoginPage.jsx";
import SignUpPage from "../page/Auth/SignUpPage/SignUpPage";
import CategoryPage from "../page/customer/CategoryPage/CategoryPage.jsx";
import CartPage from "../page/customer/CartPage/CartPage.jsx";
import HomePage from "../page/customer/HomePage/HomePage.jsx";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage.jsx";

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

  // admin

  // not found page
  {
    path: "*",
    page: NotFoundPage,
  },
];
