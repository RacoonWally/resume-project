import React from "react";

import './index.scss'

const DefaultBanner = () => {
    return (
        <div className='brand-banner'>
            <div className='brand-banner__image'>
                <div className='brand-banner__dark'>
                </div>
                <div className='brand-banner__inner'>
                    <img src="../../../public/images/brand_banner.png" alt=""/>
                </div>
            </div>
            <div className='brand-banner__name'>
                A V E
            </div>
            <div className='brand-banner__text'>
                <div><span>THE</span> BRAND</div>
                <div>COMPANY SLOGAN GOES HERE</div>
            </div>
        </div>
    )
};

export default DefaultBanner;
