import React from 'react';

import Logo from './Logo';
import './Footer.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-list footer-list-logo'>
                <div className>
                    <Logo />
                </div>
                <div>
                    A better way to build
                </div>
                <div class='footer-social-media-container'>
                    <div className='fa fa-instagram'></div>
                    <div className='fa fa-facebook'></div>
                    <div className='fa fa-twitter'></div>
                    <div className='fa fa-pinterest'></div>
                </div>
            </div>
            <div className='footer-list'>
                <div className='footer-list-header'>products</div>
                <div>Page Builder</div>
                <div>UI Kit</div>
                <div>Styleguide</div>
                <div>Documentation</div>
                <div>Changelog</div>
            </div>
            <div className='footer-list'>
                <div className='footer-list-header'>services</div>
                <div>Documentation</div>
                <div>Changelog</div>
                <div>Pagebuilder</div>
                <div>UI Kit</div>
            </div>
            <div className='footer-list'>
                <div className='footer-list-header'>connect</div>
                <div>Page Builder</div>
                <div>UI Kit</div>
                <div>Styleguide</div>
                <div>Documentation</div>
                <div>Changelog</div>
                <div>Documentation</div>
                <div>Changelog</div>
            </div>
            <div className='footer-list'>
                <div className='footer-list-header'>legal</div>
                <div>Documentation</div>
                <div>Changelog</div>
                <div>Pagebuilder</div>
            </div>
        </div>
    );
}

export default Footer;