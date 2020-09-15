import React from "react";

import './index.scss'
import AuthLine from "../../components/authLine";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import Address from "../../components/address";
import DefaultBanner from "../../components/defaultBanner";

const LocalStoresPage = () => {
    return (
        <div>
            <AuthLine/>
            <NavBar/>
            <DefaultBanner/>
            <Address/>
            <Footer/>
        </div>
    )
};

export default LocalStoresPage
