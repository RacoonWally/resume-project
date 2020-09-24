import React from "react";
import {Link} from "react-router-dom";

import './index.scss'
import Slider from "../slider";

const ProductViewItem = () => {
    return (
        <div className='product-item'>
            <div className='product-item__slider'>
                <Slider/>
            </div>
            <div className='product-item__description'>
                <div className="__title">
                    <p>AVE CLASSIC SWEATSHIRT</p>
                </div>
                <div className='product-item__price'>
                    <div className='product-item__price-string'>
                        <div className='product-item__price-icon'>&#163;</div>
                        <div className='__price line__through'>107</div>
                    </div>
                    <div className='product-item__price-string'>
                        <div className='product-item__price-icon'>&#163;</div>
                        <div>89.99</div>
                    </div>
            </div>
                <div className='product-item__market-descr'>
                    <div><span>AVAILABILITY:</span>In stock</div>
                    <div><span>PRODUCT CODE:</span>In stock</div>
                    <div>
                        <span>TAGS:</span>
                        <Link to='/'>Classic,</Link>
                        <Link to='/'>Casual,</Link>
                        <Link to='/'>V-neck</Link>
                    </div>
                </div>
                <div className='product-item__description __text'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eaque esse eum hic natus
                    pariatur quisquam unde ut veniam voluptate!
                </div>
                <ul>
                    <li><span className='__text'>Lorem ipsum.</span></li>
                    <li><span className='__text'>Lorem ipsum.</span></li>
                    <li><span className='__text'>Lorem ipsum.</span></li>
                    <li><span className='__text'>Lorem ipsum dolor sit amet.</span></li>
                </ul>
                <div className='product-item__selectors-bar'>
                    <div className='product-item__selector-group'>
                        <label htmlFor="color" className='title'>COLOUR</label>
                        <div className='product-item__selector'>
                            <select name='color' defaultValue='default' >
                                <option defaultValue="default" disabled >Select Color</option>
                                <option value="1">red</option>
                                <option value="2">blue</option>
                                <option value="3">white</option>
                                <option value="4">black</option>
                            </select>
                        </div>
                    </div>
                    <div className='product-item__selector-group'>
                        <label htmlFor="" className='__title'>SIZE</label>
                        <div className='product-item__selector'>
                            <select defaultValue='default'>
                                <option value="default" disabled>Select Size</option>
                                <option value="1">40</option>
                                <option value="2">41</option>
                                <option value="3">42</option>
                                <option value="4">43</option>
                            </select>
                        </div>

                    </div>
                    <div className='product-item__selector-group'>
                        <label htmlFor="" className='__title'>QTY</label>
                        <div className='product-item__selector'>
                            <input type="number" placeholder={1}/>
                        </div>
                    </div>
                </div>
                <div className='product-item__buttons'>
                    <div className='button black-buttons'><span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span> ADD TO CART</div>
                    <div className='button black-buttons'><span><i className="fa fa-heart-o" aria-hidden="true"></i></span> ADD TO LOOKBOOK</div>
                </div>
                <div className='product-item__compare'>
                    <div className='product-item__icon'>
                        <i className="fa fa-compress" aria-hidden="true"></i>
                    </div>
                    <div>ADD TO COMPARE</div>
                </div>
            </div>

        </div>
    )
};

export default ProductViewItem;
