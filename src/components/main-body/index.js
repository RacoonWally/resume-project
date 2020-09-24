import React from 'react';


import CartItem from "../cartItem";

import './index.scss';

const MainBody = () => {

    return (
        <div className='main-body'>
            <div className='main-body__line'></div>
            <div className='main-body__menu'>
                <div className='main-body__item'><label>POPULAR</label></div>
                <div className='main-body__item'><label>NEW ARRIVALS</label></div>
                <div className='main-body__item'><label>BEST SELLERS</label></div>
                <div className='main-body__item'><label>SPECIAL OFFERS</label></div>
                <div className='main-body__item'><label>COMING SOON</label></div>
            </div>
            <section className="main-body__cards-list">
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
