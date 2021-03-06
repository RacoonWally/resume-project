import React from "react";

import './index.scss'

import Header from "../../components/header";
import MainBody from "../../components/main-body";
import LookBooksAdv from "../../components/lookBooksAdv";
import Footer from "../../components/footer";



const MainPage = () =>{

        return(
            <div className='main-page'>
                <Header />
                <MainBody />
                <LookBooksAdv/>
                <Footer/>
            </div>
        )

};

export default MainPage;
