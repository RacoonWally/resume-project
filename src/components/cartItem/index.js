import React, {Component, Fragment} from "react";

import IconBar from "../iconBar";

import './index.scss'
import {Link} from "react-router-dom";

class CartItem extends Component {

    render() {
        return (
            <div className="cards-list_item">
                <Link to='/product-view'>
                    <div className="card-list_item_price-container">
                        <div className="card-list_item_price_absolute">
                            <div className="card-list_item_price_icon">
                                <span>&#163;</span>
                            </div>
                            89.99
                        </div>
                    </div>
                    <div className="cards-list_item_inner">
                        <div className="cards-list_item_inner_image">
                            <img src="../../../public/images/item_1.png" alt=""/>
                        </div>
                        <div className="cards-list_item_inner_info">
                            <div className='__title'>
                                <p>WOMENS BURNT ORANGE CASUAL TEE &#163;29.95</p>
                            </div>
                            <div>
                                <p>Classic casual t-shirt for women on the move.<br/>100% cotton.</p>
                            </div>
                            <IconBar/>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }

}

export default CartItem;
