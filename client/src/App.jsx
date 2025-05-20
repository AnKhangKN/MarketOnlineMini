import {Route, Routes} from "react-router-dom";
import {routes} from "./routes";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerLayout from "./layout/CustomerLayout/CustomerLayout.jsx";

function App() {
    return (
        <Routes>
            {routes.map((route, index) => {
                const Path = route.path;
                const Page = route.page;
                let Layout = React.Fragment;

                if (route.isShowHeaderCustomer) Layout = CustomerLayout;

                return (
                    <Route
                        key={index}
                        path={Path}
                        element={
                            <Layout>
                                <Page/>
                            </Layout>
                        }
                    />
                );
            })}
        </Routes>
    );
}

export default App;
