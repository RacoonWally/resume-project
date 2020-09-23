import React from "react";
import {Link} from "react-router-dom";

import './index.scss'
import FooterLink from "../footerLink";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__column-list'>
                <div className='footer__column'>
                    <div className='footer__title'>INFORMATION</div>
                    <FooterLink name="The brand" link={'/'}/>
                    <FooterLink name="Local stores" link={'/'}/>
                    <FooterLink name="Customer service" link={'/'}/>
                    <FooterLink name="Privacy & cookies" link={'/'}/>
                    <FooterLink name="Site map" link={'/'}/>
                </div>
                <div className='footer__column'>
                    <div className='footer__title'>WHY BUY FROM US</div>
                    <FooterLink name="The brand" link={'/'}/>
                    <FooterLink name="Shipping & returns" link={'/'}/>
                    <FooterLink name="Secure shopping" link={'/'}/>
                    <FooterLink name="Testimonials" link={'/'}/>
                    <FooterLink name="Award winning" link={'/'}/>
                    <FooterLink name="Ethical trading" link={'/'}/>
                </div>
                <div className='footer__column'>
                    <div className='footer__title'>YOUR ACCOUNT</div>
                    <FooterLink name="Sing in" link={'/'}/>
                    <FooterLink name="Register" link={'/'}/>
                    <FooterLink name="View cart" link={'/'}/>
                    <FooterLink name="View your lookbook" link={'/'}/>
                    <FooterLink name="Track an order" link={'/'}/>
                    <FooterLink name="Update information" link={'/'}/>
                </div>
                <div className='footer__column'>
                    <div className='footer__title'>LOOKBOOK</div>
                    <FooterLink name="Latest posts" link={'/'}/>
                    <FooterLink name="Men's lookbook" link={'/'}/>
                    <FooterLink name="Women's lookbook" link={'/'}/>
                    <FooterLink name="Lookbook RSS feed" link={'/'}/>
                    <FooterLink name="View your lookbook" link={'/'}/>
                    <FooterLink name="Delete your lookbook" link={'/'}/>
                </div>
                <div className='footer__column'>
                    <div className='footer__title'>CONTACT DETAILS</div>
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
            <div className='footer__banners'>
                <div className='footer__banner banner__award'>
                    <p><span>AWARD WINNER</span><br/>FASHION AWARDS 2016</p>
                </div>
                <div className='footer__banner banner__socials'>
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
