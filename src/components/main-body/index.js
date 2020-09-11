import React from 'react';

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
            <div className='main-body_card'>
                <div className='main-body_card-list'>
                    <div className='main-body_card-list_item'>
                        <div className='main-body_card-list_item_price'>
                            <div className='main-body_card-list_item_price_absolute'>
                                <div className='main-body_card-list_item_price_icon'><span>&#163;</span></div>
                                <div><label>89.99</label></div>
                            </div>
                        </div>
                        <div className='main-body_card-list_item_pic'>

                                <img src="../../../public/images/item_1.png" alt=""/>

                        </div>
                        <div className='main-body_card-list_item_description'>
                            <div className="__title">WOMENS BURNT ORANGE CASUAL TEE <span>&#163;</span>29.95</div>
                            <div>Classic casual t-shirt for women on the move.<br/>100% cotton</div>
                        </div>
                    </div>
                    <div className='main-body_card-list_item'>
                        <div className='main-body_card-list_item_price'>
                            <div className='main-body_card-list_item_price_absolute'>
                                <div className='main-body_card-list_item_price_icon'><span>&#163;</span></div>
                                <div><label>89.99</label></div>
                            </div>
                        </div>
                        <div className='main-body_card-list_item_pic'>
                            <img src="../../../public/images/item_2.png" alt=""/>
                        </div>
                        <div className='main-body_card-list_item_description'>
                            <div className="__title">WOMENS BURNT ORANGE CASUAL TEE <span>&#163;</span>29.95</div>
                            <div>Classic casual t-shirt for women on the move.<br/>100% cotton</div>
                        </div>
                    </div>
                    <div className='main-body_card-list_item'>
                        <div className='main-body_card-list_item_price'>
                            <div className='main-body_card-list_item_price_absolute'>
                                <div className='main-body_card-list_item_price_icon'><span>&#163;</span></div>
                                <div><label>89.99</label></div>
                            </div>
                        </div>
                        <div className='main-body_card-list_item_pic'>
                            <img src="../../../public/images/item_3.png" alt=""/>
                        </div>
                        <div className='main-body_card-list_item_description'>
                            <div className="__title">WOMENS BURNT ORANGE CASUAL TEE <span>&#163;</span>29.95</div>
                            <div>Classic casual t-shirt for women on the move.<br/>100% cotton</div>
                        </div>
                    </div>
                    <div className='main-body_card-list_item'>
                        <div className='main-body_card-list_item_price'>
                            <div className='main-body_card-list_item_price_absolute'>
                                <div className='main-body_card-list_item_price_icon'><span>&#163;</span></div>
                                <div><label>89.99</label></div>
                            </div>
                        </div>
                        <div className='main-body_card-list_item_pic'>
                            <img src="../../../public/images/item_4.png" alt=""/>
                        </div>
                        <div className='main-body_card-list_item_description'>
                            <div className="__title">WOMENS BURNT ORANGE CASUAL TEE <span>&#163;</span>29.95</div>
                            <div>Classic casual t-shirt for women on the move.<br/>100% cotton</div>
                        </div>
                    </div>
                    <div className='main-body_card-list_item'>
                        <div className='main-body_card-list_item_price'>
                            <div className='main-body_card-list_item_price_absolute'>
                                <div className='main-body_card-list_item_price_icon'><span>&#163;</span></div>
                                <div><label>89.99</label></div>
                            </div>
                        </div>
                        <div className='main-body_card-list_item_pic'>
                            <img src="../../../public/images/item_5.png" alt=""/>
                        </div>

                        <div className='main-body_card-list_item_description'>
                            <div className="__title">WOMENS BURNT ORANGE CASUAL TEE <span>&#163;</span>29.95</div>
                            <div>Classic casual t-shirt for women on the move.<br/>100% cotton</div>
                        </div>
                    </div>
                    <div className='main-body_card-list_item'>
                        <div className='main-body_card-list_item_price'>
                            <div className='main-body_card-list_item_price_absolute'>
                                <div className='main-body_card-list_item_price_icon'><span>&#163;</span></div>
                                <div><label>89.99</label></div>
                            </div>
                        </div>
                        <div className='main-body_card-list_item_pic'>
                            <img src="../../../public/images/item_6.png" alt=""/>
                        </div>
                        <div className='test'>
                            <div className='main-body_card-list_item_description'>
                                <div className="__title">WOMENS BURNT ORANGE CASUAL TEE <span>&#163;</span>29.95</div>
                                <div>Classic casual t-shirt for women on the move.<br/>100% cotton</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default MainBody;
