import React, {useEffect} from "react";

import './index.scss'
import {Link} from "react-router-dom";

const FooterLink= (props) => {
    const {name, link} = props;

    return (
            <div className='footer__link'>
                <Link className='footer__link' to={link}>{name}</Link>
            </div>
    )
};

export default FooterLink
