import React from 'react'
import HeaderComponent from "../../components/customer/HeaderComponent/HeaderComponent.jsx";

const CustomerLayout = ({children}) => {
    return (
        <>
            <header>
                <HeaderComponent />
            </header>
            <main>{children}</main>
        </>
    )
}
export default CustomerLayout
