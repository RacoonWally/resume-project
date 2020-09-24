import React, {Component, Fragment} from "react";

import IconBar from "../iconBar";

import './index.scss'
import {Link} from "react-router-dom";

class CartItem extends Component {

    render() {
        return (
            <div className="cards-list__item">
                <Link to='/product-view'>
                    <div className="card-list__container">
                        <div className="card-list__absolute">
                            <div className="card-list__icon">
                                <span>&#163;</span>
                            </div>
                            89.99
                        </div>
                    </div>
                    <div className="cards-list__inner">
                        <div className="cards-list__image">
                            <img src="../../../public/images/item_1.png" alt=""/>
                        </div>
                        <div className="cards-list__info">
                            <div className='title'>
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
