import React from "react";
import {Link} from "react-router-dom";

import './index.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_column-list'>
                <div className='footer_column'>
                    <div className='__title'>INFORMATION</div>
                    <div>
                        <Link className='footer_link' to='/'>The brand</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Local stores</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Customer service</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Privacy & cookies</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Site map</Link>
                    </div>
                </div>
                <div className='footer_column'>
                    <div className='__title'>WHY BUY FROM US</div>
                    <div>
                        <Link className='footer_link' to='/'>Shipping & returns</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Secure shopping</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Testimonials</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Award winning</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Ethical trading</Link>
                    </div>
                </div>
                <div className='footer_column'>
                    <div className='__title'>YOUR ACCOUNT</div>
                    <div>
                        <Link className='footer_link' to='/'>Sing in</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Register</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>View cart</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>View your lookbook</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Track an order</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Update information</Link>
                    </div>
                </div>
                <div className='footer_column'>
                    <div className='__title'>LOOKBOOK</div>
                    <div>
                        <Link className='footer_link' to='/'>Latest posts</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Men's lookbook</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Women's lookbook</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Lookbook RSS feed</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>View your lookbook</Link>
                    </div>
                    <div>
                        <Link className='footer_link' to='/'>Delete your lookbook</Link>
                    </div>
                </div>
                <div className='footer_column'>
                    <div className='__title'>CONTACT DETAILS</div>
                    <div>
                        <p>Head Office Avenue Fashion.<br/>180-182 Regent Street London</p>
                    </div>
                    <div>
                        <p>Telephone: 0123-456-789</p>
                    </div>
                    <div>
                        <p>Email: support@yourwebsite.com</p>
                    </div>
                </div>
            </div>
            <div className='footer_banners'>
                <div className='footer_banner __award'>
                    <p><span>AWARD WINNER</span><br/>FASHION AWARDS 2016</p>
                </div>
                <div className='footer_banner __socials'>
                        <div><i className="fa fa-facebook" aria-hidden="true"></i></div>
                        <div><i className="fa fa-twitter" aria-hidden="true"></i></div>
                        <div><i className="fa fa-instagram" aria-hidden="true"></i></div>
                        <div><i className="fa fa-pinterest-p" aria-hidden="true"></i></div>
                </div>
            </div>
        </div>
    )
};

export default Footer
