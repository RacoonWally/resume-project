import React from "react";

import './index.scss'

const DefaultBanner = () => {
    return (
        <div className='brand_banner'>
            <div className='brand_banner_image'>
                <div className='brand_banner_darked'>
                </div>
                <div className='brand_banner_inner'>
                    <img src="../../../public/images/brand_banner.png" alt=""/>
                </div>
            </div>
            <div className='brand_banner_name'>
                A V E
            </div>
            <div className='brand_banner_text'>
                <div><span>THE</span> BRAND</div>
                <div>COMPANY SLOGAN GOES HERE</div>
            </div>
        </div>
    )
};

export default DefaultBanner;
