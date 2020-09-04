import React, {Component} from "react";

import AuthLine from "../authLine";
import NavBar from "../navBar";

class Header extends Component{

    render() {
        return (
            <div>
                <div>
                    <AuthLine/>
                </div>
                <div>
                    <NavBar/>
                </div>
            </div>
        )
    }

}

export default Header
