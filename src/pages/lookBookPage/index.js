import React from "react";

import './index.scss'
import AuthLine from "../../components/authLine";
import NavBar from "../../components/navBar";
import DefaultBanner from "../../components/defaultBanner";
import LookBooksAdv from "../../components/lookBooksAdv";
import Footer from "../../components/footer";
import LookBookBody from "../../components/lookBookBody";

const LookBookPage = () => {
    return (
        <div className='look-book-page'>
            <AuthLine/>
            <NavBar/>
            <DefaultBanner/>
            <LookBookBody/>
            <LookBooksAdv/>
            <Footer/>
        </div>
    )
};

export default LookBookPage;
