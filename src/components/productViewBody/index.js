import React from "react";

import './index.scss'
import ProductViewItem from "../productViewItem";
import ProductViewItemDescription from "../productViewItemDescription";

const ProductViewBody = () => {
    return(
        <div className='product-view-body'>
            <ProductViewItem/>
            <ProductViewItemDescription data={''}/>
        </div>
    )
};

export default ProductViewBody
