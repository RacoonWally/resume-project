import React from "react";
import {Link} from 'react-router-dom'

import './index.scss'

const AuthLine = () => {
    return (
        <>
            <div className='auth-line'>
                <div className='auth-line_button'>
                    <Link to='/auth' className="auth-line_link">Register</Link>
                </div>
                <div className='auth-line_button'>
                    <Link to='/auth' className="auth-line_link">Sing In</Link>
                </div>
                <div className='auth-line_button __basket'>
                    <div>
                        <Link to='/box' className="auth-line_link">
                            <span><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                            <label className="auth-line_link">empty</label>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AuthLine;
