import React from "react";
import {Link} from "react-router-dom";

import AuthLine from "../authLine";
import NavBar from "../navBar";

import './index.scss'
import Button from "../button";

const Header = () => {

    const data = {
        subclasses: "header__button",
        text: "SHOP MEN'S COLLECTION"
    };

    return (
        <div className='header'>
            <div>
                <AuthLine/>
            </div>
            <div className='header__background'>
                <div className='header__image'>
                    <div className='header__label'>
                        <label>A V E</label>
                    </div>
                    <Button data={data}/>
                </div>
            </div>
            <div>
                <NavBar/>
            </div>
        </div>
    )
};

export default Header
