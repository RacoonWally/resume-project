import React from "react";

import './index.scss'
import AuthLine from "../../components/authLine";
import NavBar from "../../components/navBar";
import DefaultBanner from "../../components/defaultBanner";
import Footer from "../../components/footer";
import SingUpBody from "../../components/singUpBody";

const SingUpPage = () => {
    return(
        <div className='sing-up-page'>
            <AuthLine/>
            <NavBar/>
            <DefaultBanner/>
            <SingUpBody/>
            <Footer/>
        </div>
    )
};

export default SingUpPage;
