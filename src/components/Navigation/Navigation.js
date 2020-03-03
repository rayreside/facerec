import React from 'react';
import './Navigation.css';
import Logo from './Logo.js';

const Navigation = ({ onRouteChange, isSignedIn, toggleTheme, theme }) => {
    return (
        <header className="fixed w-100 h3 ph3">
            <nav className="flex justify-between h-100 tracked">
                <Logo toggleTheme={toggleTheme} theme={theme} />
                <div className='flex-grow pl3 flex items-center'>
                    { isSignedIn &&
                        <p onClick={() =>onRouteChange('SignOut')} 
                            className="dim b f5 pa2 bg-animate pointer br3">Sign Out</p>
                    }
                    <button onClick={toggleTheme} id='btnToggle'  
                    className="b bn pa3 mh2 pointer br-100"
                    style={{outline: 0}}></button>
                </div>
            </nav>
        </header>
    )
}

export default Navigation;