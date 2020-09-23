import React from "react";

import './index.scss'

const LookBooksAdvItem = () => {
    return (
        <div className='look-books-adv__item'>
            <div className='look-books-adv__image'>
                <img src="../../../public/images/adv-item_1.png" alt=""/>
            </div>
            <div className='look-books-adv__text'>
                <div className='look-books-adv__title '><p><span className='look-books-adv__bold'>Men's</span><br/>LOOKBOOK</p></div>
                <div className='look-books-adv__descr'><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi commodi consectetur, consequatur cum debitis eaque eligendi illum inventore ipsam iure magnam minus pariatur perferendis porro repellat similique ut voluptate!</p></div>
                <div className='look-books-adv__button button'>VIEW NOW</div>
            </div>
        </div>
    )
};

export default LookBooksAdvItem
