import React from "react";
import {Link} from "react-router-dom";

import './index.scss'
import Slider from "../slider";

const ProductViewItem = () => {
    return (
        <div className='product-item'>
            <div className='product-item_slider'>
                <Slider/>
            </div>
            <div className='product-item_description'>
                <div className="__title">
                    <p>AVE CLASSIC SWEATSHIRT</p>
                </div>
                <div className='product-item_description_price'>
                    <div className='product-item_description_price-string'>
                        <div className='product-item_description_price_icon'>&#163;</div>
                        <div className='__price __line-through'>107</div>
                    </div>
                    <div className='product-item_description_price-string'>
                        <div className='product-item_description_price_icon'>&#163;</div>
                        <div>89.99</div>
                    </div>
                </div>
                <div className='product-item-description_market-descr'>
                    <div><span>AVAILABILITY:</span>In stock</div>
                    <div><span>PRODUCT CODE:</span>In stock</div>
                    <div>
                        <span>TAGS:</span>
                        <Link to='/'>Classic,</Link>
                        <Link to='/'>Casual,</Link>
                        <Link to='/'>V-neck</Link>
                    </div>
                </div>
                <div className='product-item-description __text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eaque esse eum hic natus
                    pariatur quisquam unde ut veniam voluptate!
                </div>
                <ul>
                    <li><span className='__text'>Lorem ipsum.</span></li>
                    <li><span className='__text'>Lorem ipsum.</span></li>
                    <li><span className='__text'>Lorem ipsum.</span></li>
                    <li><span className='__text'>Lorem ipsum dolor sit amet.</span></li>
                </ul>
                <div className='product-item_selectors-bar'>
                    <div className='product-item_selector-group'>
                        <label htmlFor="color" className='__title'>COLOUR</label>
                        <div className='product-item_selector'>
                            <select name='color'>
                                <option defaultValue="" disabled selected>Select Color</option>
                                <option value="1">red</option>
                                <option value="2">blue</option>
                                <option value="3">white</option>
                                <option value="4">black</option>
                            </select>
                        </div>
                    </div>
                    <div className='product-item_selector-group'>
                        <label htmlFor="" className='__title'>SIZE</label>
                        <div className='product-item_selector'>
                            <select>
                                <option defaultValue="" disabled selected>Select Size</option>
                                <option value="1">40</option>
                                <option value="2">41</option>
                                <option value="3">42</option>
                                <option value="4">43</option>
                            </select>
                        </div>

                    </div>
                    <div className='product-item_selector-group'>
                        <label htmlFor="" className='__title'>QTY</label>
                        <div className='product-item_selector'>
                            <input type="number" placeholder={1}/>
                        </div>
                    </div>
                </div>
                <div className='product-item_buttons'>
                    <div className='button __black-buttons'><span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span> ADD TO CART</div>
                    <div className='button __black-buttons'><span><i className="fa fa-heart-o" aria-hidden="true"></i></span> ADD TO LOOKBOOK</div>
                </div>
                <div className='product-item_compare'>
                    <div className='product-item_compare-icon'>
                        <i className="fa fa-compress" aria-hidden="true"></i>
                    </div>
                    <div>ADD TO COMPARE</div>
                </div>
            </div>

        </div>
    )
};

export default ProductViewItem;
