import HomePage from "../page/customer/HomePage/HomePage.jsx";
import NotFoundPage from "../page/NotFoundPage/NotFoundPage.jsx";

export const routes = [
    {
        path: '/',
        page: HomePage,
        isShowHeaderCustomer: true
    },
    {
        path: '*',
        page: NotFoundPage,
    },

]