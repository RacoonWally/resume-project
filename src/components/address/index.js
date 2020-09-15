import React from "react";

import './index.scss'
import AddressCard from "../addressCard";
import IconBar from "../iconBar";


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
                    <div className='__title'>
                        <p>LONDON</p>
                    </div>
                    <div className='__subtitle'>
                        <p>180-182 REGENT STREET. LONDON W1B 5BT</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores corporis cupiditate debitis distinctio, dolorum hic laboriosam reiciendis? Autem delectus fuga ipsum minus nesciunt nobis quia quos reiciendis sit totam. Labore!</p>
                    </div>
                    <div>
                        <p><span><i className="fa fa-map-marker" aria-hidden="true"></i></span>180-182 REGENT STREET. LONDON W1B 5BT</p>
                    </div>
                    <div>
                        <p><span><i className="fa fa-phone" aria-hidden="true"></i></span>0123-456-789</p>
                    </div>
                    <div>
                        <p><span><i className="fa fa-link" aria-hidden="true"></i></span>www.yourwebsite.com</p>
                    </div>
                    <div>
                        <p><span><i className="fa fa-envelope-o" aria-hidden="true"></i></span>support@yourwebsite.com</p>
                    </div>
                    <div>
                        <p><span><i className="fa fa-clock-o" aria-hidden="true"></i></span>Monday-Friday: 9am to 6pm Saturday: 10ap to 6pm Sunday: 10am to 2pm</p>
                    </div>
                    <div className='address-description_socials'>
                        <div className='__icon'><i className="fa fa-facebook" aria-hidden="true"></i></div>
                        <div className='__icon'><i className="fa fa-twitter" aria-hidden="true"></i></div>
                        <div className='__icon'><i className="fa fa-instagram" aria-hidden="true"></i></div>
                        <div className='__icon'><i className="fa fa-pinterest-p" aria-hidden="true"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Address;
