import React from 'react';

import brandLogo from '../resources/img/brand.svg'


const Logo = () => {
    return (
        <div className='logo'>
            <img src={ brandLogo } alt='LandKit' />
        </div>
    )
}

export default Logo;