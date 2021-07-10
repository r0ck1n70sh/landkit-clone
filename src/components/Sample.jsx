import React from 'react';

import image from '../resources/img/illustration-8.png'
import './Sample.css';

const Sample = () => {
    return (
        <div className='sample'>
            <div className='card-img'>
                <img src={ image } alt='illustration-8.png'/>
            </div>
            <div className='card-text'>
                <div className='card-text-header'>
                    Stay focused on your business.
                </div>
                <div className='card-text-header blue-heading'>
                    Let us handle the design.
                </div>
                <div className='card-text-sm'>
                    You have a business to run. Stop worring about cross-<br />browser bugs, designing new pages, keeping your<br /> components up to date. Let us do that for you.
                </div>
                <div className='card-flex'>
                    <div className='card-flex-card'>
                        <div>100%</div>
                        <div>Satisfaction</div>
                    </div>
                    <div className='card-flex-card'>
                        <div>24/7</div>
                        <div>Support</div>
                    </div>
                    <div className='card-flex-card'>
                        <div>100k+</div>
                        <div>Sales</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sample;