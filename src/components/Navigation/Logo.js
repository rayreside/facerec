import React from 'react';

const Logo = ({ toggleTheme, theme }) => {
    return (
        <div className='pointer pl2 flex items-center'>
            <img src='https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/banana_1f34c.png' alt='logo' className="dib w2 h2 pa1" />
        </div>
    )
}

export default Logo;