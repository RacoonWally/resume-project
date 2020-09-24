import React from "react";

import './index.scss'

import CartItem from "../cartItem";
import LookBookBanner from "../lookbookBanner";


const LookBookBody = () => {
    return(
        <div className='look-books-body'>
            <div className='look-books-body__line'></div>
            <div className='look-books-body__menu'>
                <div className='look-books-body__item'><label>POPULAR</label></div>
                <div className='look-books-body__item'><label>NEW ARRIVALS</label></div>
                <div className='look-books-body__item'><label>BEST SELLERS</label></div>
                <div className='look-books-body__item'><label>SPECIAL OFFERS</label></div>
                <div className='look-books-body__item'><label>COMING SOON</label></div>
            </div>
            <section className="look-books-body__cards-list">
                <CartItem/>
                <CartItem/>
                <LookBookBanner/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <CartItem/>
                <LookBookBanner/>
                <CartItem/>
            </section>
            <div className='look-books-body__line'></div>
        </div>
    )
};

export default LookBookBody;
