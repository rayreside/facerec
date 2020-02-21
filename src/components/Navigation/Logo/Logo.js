import React from 'react';
import './Logo.css';

const Logo = ({ toggleTheme, theme }) => {
    return (
        <div className='pointer pa3 flex items-center'>
            <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/banana_1f34c.png' alt='logo' className="dib w2 h2 pa1" />
            <p onClick={toggleTheme} id='btnToggle'  
            className="btnImg b f5 pa2 mh2 bg-animate pointer br3">{theme}</p>
        </div>
    )
}

export default Logo;