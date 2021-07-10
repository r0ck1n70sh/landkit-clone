import React from 'react';

import image from '../resources/img/illustration-2.png';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='card-upper-img'>
                <img src={ image } alt='illustration-2.png' />
            </div>
            <div className='card-upper-text'>
                <div className='card-upper-text-lg'>
                    Welcome to Landkit.<br />Develop anything.
                </div>
                <div className='card-upper-text-sm'>
                    Build a beautiful, modern website with flexible<br /> Bootstrap components built from scratch.
                </div>
                <div className='btn-container'>
                    <button className='btn-blue'>View all Pages &rarr;</button>
                    <button className='btn-grey'>Documentation</button>
                </div>
            </div>
            <div className='card-lower card-lower-1'>
                <div className='card-lower-icon fa fa-toggle-on'></div>
                <div className='card-lower-header'>Built for developers
</div>
                <div className='card-lower-text'>
                    Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.
                </div>
            </div>
            <div className='card-lower card-lower-2'>
                <div className='card-lower-icon fa fa-list-alt'></div>
                <div className='card-lower-header'>Designed to be modern</div>
                <div className='card-lower-text'>
                    Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautiful.
                </div>
            </div>
            <div className='card-lower card-lower-3'>
                <div className='card-lower-icon fa fa-code'></div>
                <div className='card-lower-header'>Documentation for everything
</div>
                <div className='card-lower-text'>
                    We've written extensive documentation for components and tools, so you never have to reverse engineer anything.
                </div>
            </div>
        </div>
    )
}

export default Home;