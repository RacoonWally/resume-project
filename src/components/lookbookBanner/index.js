import React from "react";

import './index.scss'

const LookBookBanner = () => {

    return(
        <div className='look-book-banner'>
            <div className='look-book-banner_descr'>
                <div className='__title'>
                    <p><span>JANE'S</span> LOOKBOOK</p>
                </div>
                <div className='__subtitle'>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='__text'>
                    <p>Lorem ipsum dolor sit   et excepturi expedita harum incidunt itaque natus, nisi obcaecati odio, perspiciatis quia sequi vero!</p>
                </div>
                <div className='__text'>
                    <p>Lorem ipsum dolor sit Ab  dolor eum id inventore ipsa iusto quasi sint voluptate!</p>
                </div>
                <div className='look-book_button button'>VIEW NOW</div>
            </div>
            {/*<div className='look-book-banner_image'>*/}
            {/*    <div>*/}
            {/*        <img src="../../../public/images/lookbook-banner.png" alt=""/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
};

export default LookBookBanner;
