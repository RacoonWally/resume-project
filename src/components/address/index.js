import React from "react";

import './index.scss'
import AddressCard from "../addressCard";


const Address = () => {
    return (
        <div className='address'>
            <div className='address-cards'>
                <AddressCard/>
                <AddressCard/>
                <AddressCard/>
            </div>
            <div className='address-description'>
                <div className='address-description_map'>
                    <img src="../../../public/images/map.png" alt=""/>
                </div>
                <div className='address-description_text'>

                </div>
            </div>
        </div>
    )
};

export default Address;
