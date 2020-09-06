import React from "react";
import {Link} from "react-router-dom";

import './index.scss'

import Categories from "../categories"

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-bar_title'>
                <label><span>AVENUE</span> FASHION</label>
            </div>
            <div className='nav-bar_menu'>
                <div className='nav-bar_menu_item'>
                    <div className='nav-bar_menu_item__title'>MENS</div>
                    <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                    <Categories/>
                </div>
                <div className='nav-bar_menu_item'>
                    <div>WOMEN</div>
                    <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                </div>
                <div className='nav-bar_menu_item'>
                    <div>THE BRAND</div>
                </div>
                <div className='nav-bar_menu_item'>
                    <div>LOCAL STORIES</div>
                    <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                </div>
                <div className='nav-bar_menu_item'>
                    <div>LOOK BOOK</div>
                    <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                </div>
            </div>
            <div className='nav-bar_menu_search'>
                <input type="text" placeholder='Search...' />
                <div className='nav-bar_menu_search_button'>
                    <Link to='/'><i className="fa fa-search" aria-hidden="true"></i></Link>
                </div>
            </div>

        </div>
    )
};

export default NavBar
