import React from "react";

import './index.scss';
import SingIn from "../singIn";
import Register from "../register";

const SingUpBody = () => {
    return (
        <div className='sing-up-body'>
            <SingIn/>
            <div className='sing-up-body_line'></div>
            <Register/>
        </div>
    )
};

export default SingUpBody;
