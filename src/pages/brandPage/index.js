import React from "react";

import './index.scss'

import AuthLine from "../../components/authLine";
import NavBar from "../../components/navBar";
import Footer from "../../components/footer";
import DefaultBanner from "../../components/defaultBanner";
import BrandArticles from "../../components/brandArticles";

const BrandPage = () => {
    return(
        <div className='brand-page'>
            <AuthLine/>
            <NavBar/>
            <DefaultBanner/>
            <BrandArticles/>
            <Footer/>
        </div>
    )
};

export default BrandPage;
