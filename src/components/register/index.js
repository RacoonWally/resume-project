import React from "react";

import './index.scss';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className='register'>
            <div className='register_input-fields'>
                <div className='__title'>
                    <label htmlFor="">REGISTER</label>
                </div>
                <div className='register_input'>
                    <input type="email" placeholder='Your Email..'/>
                </div>
                <div className='register_input'>
                    <input type="password" placeholder='Your password..'/>
                </div>
                <div className='register_input'>
                    <input type="password" placeholder='Confirm password..'/>
                </div>
                <div className='register_checkbox'>
                    <div>
                        <input type="checkbox" name='private'/>
                    </div>
                    <label htmlFor='private'>
                        Sing up for exclusive updates, discounts, new arrivalsm contests, and more
                    </label>
                </div>
            </div>
            <div className='register_buttons'>
                <div className='register_button button'>CREATE ACCOUNT</div>
                <div className='register_link'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <Link to='/' className='register_link-policy'> Privacy Policy
                        <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Register;
