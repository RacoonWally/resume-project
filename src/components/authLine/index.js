import React from "react";
import {Link} from 'react-router-dom'

import './index.scss'

const AuthLine = () => {
    return (
        <>
            <div className='auth-line'>
                <div className='auth-line__button'>
                    <Link to='/sing-up' className="auth-line__link">Register</Link>
                </div>
                <div className='auth-line__button'>
                    <Link to='/sing-up' className="auth-line__link">Sing In</Link>
                </div>
                <div className='auth-line__button auth-line__basket'>
                    <div>
                        <Link to='/' className="auth-line__link">
                            <span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <label>empty</label>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AuthLine;
