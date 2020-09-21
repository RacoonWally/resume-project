import React from "react";

import './index.scss'
import AuthLine from "../../components/authLine";
import NavBar from "../../components/navBar";
import DefaultBanner from "../../components/defaultBanner";
import Footer from "../../components/footer";
import ProductViewBody from "../../components/productViewBody";

const ProductViewPage = () => {
    return(
        <div className='product-view-page'>
            <AuthLine/>
            <NavBar/>
            <DefaultBanner/>
            <ProductViewBody/>
            <Footer/>
        </div>
    )
};

export default ProductViewPage;
