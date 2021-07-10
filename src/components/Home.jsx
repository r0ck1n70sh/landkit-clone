import React from 'react';

import image from '../resources/img/illustration-2.png';
import './Home.css';

const Home = () => {
    return (
        <div className='Home'>
            <div className='card-upper'>
                <img src={ image } alt='illustration-2.png' />
            </div>
            <div className='card-upper'>
                <div>
                    Welcome to Landkit.<br />Develop anything.
                </div>
                <div>
                    Build a beautiful, modern website with flexible<br /> Bootstrap components built from scratch.
                </div>
                <div>
                    <button>View all Pages</button>
                    <button>Documentation</button>
                </div>
            </div>
            <div className='card-lower'>
                <div class='card-lower-icon'></div>
                <div class='card-lower-header'>Built for developers
</div>
                <div class='card-lower-text'>
                    Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.
                </div>
            </div>
            <div className='card-lower'>
                <div class='card-lower-icon'></div>
                <div class='card-lower-header'>Designed to be modern</div>
                <div class='card-lower-text'>
                    Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautiful.
                </div>
            </div>
            <div className='card-lower'>
                <div class='card-lower-icon'></div>
                <div class='card-lower-header'>Documentation for everything
</div>
                <div class='card-lower-text'>
                    We've written extensive documentation for components and tools, so you never have to reverse engineer anything.
                </div>
            </div>
        </div>
    )
}

export default Home;