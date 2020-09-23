import React from "react";

import './index.scss'

import {Link} from "react-router-dom";

const Button = (props) => {

    const {subclasses, text} = props.data;

    return (
        <div className={`button ${subclasses}`}>
            <Link to='/' className='button__link'>{text}</Link>
        </div>
    )
};

export default Button;
