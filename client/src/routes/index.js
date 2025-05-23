import LoginPage from "../page/Auth/LoginPage/LoginPage.jsx";
import SignUpPage from "../page/Auth/SignUpPage/SignUpPage";
import CategoryPage from "../page/customer/CategoryPage/CategoryPage.jsx";
import HomePage from "../page/customer/HomePage/HomePage.jsx";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage.jsx";

export const routes = [
  {
    path: "/login",
    page: LoginPage,
  },
  {
    path: "/signup",
    page: SignUpPage,
  },
  {
    path: "/",
    page: HomePage,
    isShowHeaderCustomer: true,
  },
  {
    path: "/category/:id/:name",
    page: CategoryPage,
    isShowHeaderCustomer: true,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
