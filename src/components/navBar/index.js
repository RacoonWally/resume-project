import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import './index.scss'

import Categories from "../categories"

const NavBar = () => {


    const menCategoryCasual = {
            subcategories: ["Jackets", "Hoodies & Sweatshirts", "Polo Shirts", "Sportswear", "Trousers & Chinos", "T-Shirts"],
        };

    const menCategoryFormal = {
        subcategories: ["Jackets", "Shirts", "Suits", "Trousers"]
    };

    const womenCategoryCasual =
        {
            subcategories: ["Women Jackets", "Women Hoodies & Sweatshirts", "Women Polo Shirts", "Women Sportswear", "Women Trousers & Chinos", "Women T-Shirts"]
        };

    const womenCategoryFormal = {
        subcategories: ["Jackets", "Shirts", "Suits", "Trousers"]
    };


    const localCategoryCasual = {
            subcategories: ["Jackets", "Hoodies & Sweatshirts", "Polo Shirts", "Sportswear", "Trousers & Chinos", "T-Shirts"]
        };

    const localCategoryFormal = {
        subcategories: ["Jackets", "Shirts", "Suits", "Trousers"]
    };

    const lookBookCategoryCasual = {
            subcategories: ["Jackets", "Hoodies & Sweatshirts", "Polo Shirts", "Sportswear", "Trousers & Chinos", "T-Shirts"]
        };

    const lookBookCategoryFormal = {
        subcategories: ["Jackets", "Shirts", "Suits", "Trousers"]
    };


    return (
        <div className='nav-bar'>
            <div className='nav-bar__title'>
                <Link to='/' className='nav-bar__link'>
                    <label><span>AVENUE</span> FASHION</label>
                </Link>
            </div>
            <div className='nav-bar__menu'>
                <div className='nav-bar__item'>
                    <Link to='/look-book' className='nav-bar__link nav-bar_hovered'>
                        <div className='nav-bar_menu_item'>MENS</div>
                        <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                    </Link>
                    <Categories casual={menCategoryCasual} formal={menCategoryFormal}/>
                </div>
                <div className='nav-bar__item'>
                    <Link to='/look-book' className='nav-bar__link nav-bar_hovered'>
                        <div>WOMENS</div>
                        <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                    </Link>
                    <Categories casual={womenCategoryCasual} formal={womenCategoryFormal}/>
                </div>
                <div className='nav-bar__item'>
                    <Link to='/brand' className='nav-bar__link nav-bar_hovered'>
                        <div>THE BRAND</div>
                    </Link>
                </div>
                <div className='nav-bar__item'>
                    <Link to='/local-stores' className='nav-bar__link nav-bar_hovered'>
                        <div>LOCAL STORIES</div>
                        <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                    </Link>
                    <Categories casual={localCategoryCasual} formal={localCategoryFormal}/>
                </div>
                <div className='nav-bar__item'>
                    <Link to='/look-book' className='nav-bar__link nav-bar_hovered'>
                        <div>LOOK BOOK</div>
                        <span><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                    </Link>
                    <Categories casual={lookBookCategoryCasual} formal={lookBookCategoryFormal}/>
                </div>
            </div>
            <div className='nav-bar__search'>
                <input type="text" placeholder='Search...'/>
                <div className='nav-bar_search-button'>
                    <Link to='/'><i className="fa fa-search" aria-hidden="true"></i></Link>
                </div>
            </div>
        </div>
    )
};

export default NavBar
