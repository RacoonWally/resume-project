import React from "react";

import './index.scss'

const ProductViewItemDescription = (props) => {

    const {description, videoLink, sizeSpecs, deliveryReturns, reviews} = props.data;

    return (
        <div className='product-view-item-description'>
            <div className='product-view-item-description_buttons-bar'>
                <div className='product-view-item-description_button button'>
                    DESCRIPTION
                </div>
                <div className='product-view-item-description_button button'>
                    VIDEO
                </div>
                <div className='product-view-item-description_button button'>
                    SIZE & SPECS
                </div>
                <div className='product-view-item-description_button button'>
                    DELIVERY & RETURNS
                </div>
                <div className='product-view-item-description_button button'>
                    REVIEWS
                </div>
            </div>
            <div className='product-view-item-description_body'>
                <div>
                    <p>{description}</p>
                </div>
                <div>
                    <iframe src={videoLink} frameborder="0" allowfullscreen></iframe>
                </div>
                <div>
                    <p>{sizeSpecs}</p>
                </div>
                <div>
                    <p>{deliveryReturns}</p>
                </div>
                <div>
                    <p>{reviews}</p>
                </div>
            </div>
        </div>
    )
};

export default ProductViewItemDescription;
