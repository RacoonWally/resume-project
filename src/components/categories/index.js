import React from "react";
import {Link} from "react-router-dom";

import './index.scss'

const Categories = () => {

    return(
        <div className='categories'>
            <div className='categories_grid'>
                <div className='categories_column'>
                    <div><label>CASUALS</label></div>
                    <ul>
                        <li><Link to='/'>Jackets</Link></li>
                        <li><Link to='/'>Hoodies & Sweatshirts</Link></li>
                        <li><Link to='/'>Polo Shirts</Link></li>
                        <li><Link to='/'>Sportswear</Link></li>
                        <li><Link to='/'>Trousers & Chinos</Link></li>
                        <li><Link to='/'>T-Shirts</Link></li>
                    </ul>
                </div>
                <div className='categories_column'>
                    <div><label>FORMAL</label></div>
                    <ul>
                        <li><Link to='/'>Jackets</Link></li>
                        <li><Link to='/'>Shirts</Link></li>
                        <li><Link to='/'>Suits</Link></li>
                        <li><Link to='/'>Trousers</Link></li>
                    </ul>
                </div>
            </div>
            <div className='categories_discount'>
                <label>AUTUMN SALE!</label>
                <label>UP TO 50% OFF</label>
            </div>
        </div>
    )
};

export default Categories;
