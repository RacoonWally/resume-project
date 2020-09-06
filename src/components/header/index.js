import React, {Component} from "react";
import {Link} from "react-router-dom";

import AuthLine from "../authLine";
import NavBar from "../navBar";

import './index.scss'

class Header extends Component {

    render() {
        return (
            <div>
                <div>
                    <AuthLine/>
                </div>
                <div className='header-background'>
                    <div className='header-background_image'>
                        <div className='header-background_label'>
                            <label>A V E</label>
                        </div>
                        <div className='header-background_button'>
                            <Link to='/' className='header-background_button_link'>SHOP MEN'S COLLECTION</Link>
                        </div>
                    </div>
                </div>
                <div>
                    <NavBar/>
                </div>
            </div>
        )
    }

}

export default Header
