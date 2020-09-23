import React from "react";
import {Link} from "react-router-dom";

import './index.scss';

const SingIn = () => {
    return (

        <div className='sing-in'>
            <div className='sing-in__input-fields'>
                <div className='title'>
                    <label htmlFor="">SIGN IN</label>
                </div>
                <div className='sing-in__input'>
                    <input type="email" placeholder='Your Email..'/>
                </div>
                <div className='sing-in__input'>
                    <input type="password" placeholder='Your password..'/>
                </div>
            </div>
            <div className='sing-in__buttons'>
                <div className='sing-in__button button'>SIGN IN</div>
                <div className='sing-in__link'>
                    <Link to='/' className='sing-in__forget'>Forgot your Password <span><i
                        className="fa fa-long-arrow-right" aria-hidden="true"></i></span></Link>
                </div>
            </div>
        </div>
    )
};

export default SingIn;
