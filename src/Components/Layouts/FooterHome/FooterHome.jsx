import React from 'react'

import { Ancla } from '../../UI/Ancla/Ancla'
import { SpanHome } from '../../UI/SpanHome/SpanHome'

export const FooterHome = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className='footer-content-container'>
                    <h3 className='website-logo'>Travely</h3>
                    <SpanHome style="footer-info" text="998 041 151" />
                    <SpanHome style="footer-info" text="travely@outlook.com" />
                </div>

                <div className="footer-menus">
                    <div className="footer-content-container">
                        <SpanHome style="menu-title" text="Our company" />
                        <Ancla style="menu-item-footer" reference="#" textAncla="About us" />
                        <Ancla style="menu-item-footer" reference="#" textAncla="Employment" />
                        <Ancla style="menu-item-footer" reference="#" textAncla="Blog" />
                        <Ancla style="menu-item-footer" reference="#" textAncla="How our services work" />
                    </div>

                    <div className="footer-content-container">
                        <SpanHome style="menu-title" text="Contact" />
                        <Ancla style="menu-item-footer" reference="#" textAncla="Help/FAQs" />
                        <Ancla style="menu-item-footer" reference="#" textAncla="Press" />
                        <Ancla style="menu-item-footer" reference="#" textAncla="Affiliated companies" />
                        <Ancla style="menu-item-footer" reference="#" textAncla="Partners" />
                    </div>
                </div>

                <div className="footer-content-container">
                    <SpanHome style="menu-title" text="Follow us" />
                    <div className="social-container">
                        <Ancla style="social-link" reference="#" />
                        <Ancla style="social-link" reference="#" />
                        <Ancla style="social-link" reference="#" />
                    </div>
                </div>
            </div>

            <div className="copyright-container">
                <span className="copyright">&copy;2022, Travely.com.</span>
            </div>
        </footer>
    )
}
