import React from "react";

import './index.scss';
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <div className='register'>
            <div className='register__input-fields'>
                <div className='title'>
                    <label htmlFor="">REGISTER</label>
                </div>
                <div className='register__input'>
                    <input type="email" placeholder='Your Email..'/>
                </div>
                <div className='register__input'>
                    <input type="password" placeholder='Your password..'/>
                </div>
                <div className='register__input'>
                    <input type="password" placeholder='Confirm password..'/>
                </div>
                <div className='register__checkbox'>
                    <div>
                        <input type="checkbox" name='private'/>
                    </div>
                    <label htmlFor='private'>
                        Sing up for exclusive updates, discounts, new arrivalsm contests, and more
                    </label>
                </div>
            </div>
            <div className='register__buttons'>
                <div className='register__button button'>CREATE ACCOUNT</div>
                <div className='register__link'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    <Link to='/' className='register__policy'> Privacy Policy
                        <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default Register;
