import React from "react";

import './index.scss'

import CartItem from "../cartItem";
import LookBookBanner from "../lookbookBanner";


const LookBookBody = () => {
    return(
        <div className='look-books-body'>
            <div className='look-books-body_line'></div>
            <div className='look-books-body_menu'>
                <div className='look-books-body_menu-item'><label>POPULAR</label></div>
                <div className='look-books-body_menu-item'><label>NEW ARRIVALS</label></div>
                <div className='look-books-body_menu-item'><label>BEST SELLERS</label></div>
                <div className='look-books-body_menu-item'><label>SPECIAL OFFERS</label></div>
                <div className='look-books-body_menu-item'><label>COMING SOON</label></div>
            </div>
            <section className="look-books-body_cards-list">
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
            <div className='look-books-body_line'></div>
        </div>
    )
};

export default LookBookBody;
