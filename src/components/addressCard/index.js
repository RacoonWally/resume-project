import React from "react";

import './index.scss'

const AddressCard = () => {
    return (
        <div className='address-cart'>
            <div className='address-cart_text __title'>
                <p>LONDON</p>
            </div>
            <div className='address-cart_text __subtitle'>
                <p>180-182 REGENT STREET. LONDON W1B 5BT</p>
            </div>
            <div className='address-cart_text'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolores eligendi fugiat impedit laboriosam modi natus, nihil nobis qui temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore excepturi impedit in non perspiciatis quae recusandae sit temporibus ut. Rem.</p>
            </div>
            <div className='button'>VIEW DETAILS</div>
        </div>
    )

};

export default AddressCard;
