import React, {Fragment} from "react";

import './index.scss'

const IconBar = () => {

    return (
        <div className='icon-bar'>
            <div><i className="fa fa-shopping-cart" aria-hidden="true"></i></div>
            <div><i className="fa fa-heart-o" aria-hidden="true"></i></div>
            <div><i className="fa fa-expand" aria-hidden="true"></i></div>
        </div>
    )
};

export default IconBar;
