import React from "react";
import {Link} from "react-router-dom";

import './index.scss'

const Categories = () => {

    return(
        <div className='categories'>
            <div className='categories_grid'>
                <div className='categories_column'>
                    <div><label>CASUALS</label></div>
                    <ul className='categories_list'>
                        <li className='categories_list_item'><Link to='/'>Jackets</Link></li>
                        <li className='categories_list_item'><Link to='/'>Hoodies & Sweatshirts</Link></li>
                        <li className='categories_list_item'><Link to='/'>Polo Shirts</Link></li>
                        <li className='categories_list_item'><Link to='/'>Sportswear</Link></li>
                        <li className='categories_list_item'><Link to='/'>Trousers & Chinos</Link></li>
                        <li className='categories_list_item'><Link to='/'>T-Shirts</Link></li>
                    </ul>
                </div>
                <div className='categories_column'>
                    <div><label>FORMAL</label></div>
                    <ul className='categories_list'>
                        <li className='categories_list_item'><Link to='/'>Jackets</Link></li>
                        <li className='categories_list_item'><Link to='/'>Shirts</Link></li>
                        <li className='categories_list_item'><Link to='/'>Suits</Link></li>
                        <li className='categories_list_item'><Link to='/'>Trousers</Link></li>
                    </ul>
                </div>
            </div>
            <div className='categories_discount'>
                <label>AUTUMN SALE!<br/>UP TO 50% OFF</label>

            </div>
        </div>
    )
};

export default Categories;
