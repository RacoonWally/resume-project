import React from 'react';

import LookBooksAdv from "../lookBooksAdv";
import CartItem from "../cartItem";

import './index.scss';

const MainBody = () => {

    return (
        <div className='main-body'>
            <div className='main-body_line'></div>
            <div className='main-body_menu'>
                <div className='main-body_menu_item'><label>POPULAR</label></div>
                <div className='main-body_menu_item'><label>NEW ARRIVALS</label></div>
                <div className='main-body_menu_item'><label>BEST SELLERS</label></div>
                <div className='main-body_menu_item'><label>SPECIAL OFFERS</label></div>
                <div className='main-body_menu_item'><label>COMING SOON</label></div>
            </div>
            <section className="main-body_cards-list">
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </section>
            <div className='main-body_line'></div>
        </div>
    )
};

export default MainBody;
