import React from "react";
import {Link} from "react-router-dom";

import './index.scss';

const SingIn = () => {
    return (
        <div className='sing-in'>
            <div className='sing-in_input-fields'>
                <div className='__title'>
                    <label htmlFor="">SIGN IN</label>
                </div>
                <div className='sing-in_input'>
                    <input type="email" placeholder='Your Email..'/>
                </div>
                <div className='sing-in_input'>
                    <input type="password" placeholder='Your password..'/>
                </div>
            </div>
            <div className='sing-in_buttons'>
                <div className='sing-in_button button'>SIGN IN</div>
                <div className='sing-in_link'>
                    <Link to='/' className='sing-in_link-forget'>Forgot your Password <span><i
                        className="fa fa-long-arrow-right" aria-hidden="true"></i></span></Link>
                </div>
            </div>
        </div>
    )
};

export default SingIn;
