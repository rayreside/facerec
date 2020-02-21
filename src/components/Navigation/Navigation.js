import React from 'react';
import './Navigation.css';
import Logo from './Logo/Logo.js';

const Navigation = ({ onRouteChange, route, isSignedIn }) => {
    return (
        <header className="fixed w-100 h3 ph3">
            <nav className="flex justify-between h-100 tracked">
                <Logo />
                { isSignedIn ?
                <div className='flex-grow ph3 flex items-center'>
                    <p onClick={() =>onRouteChange('SignOut')} 
                    className="btnImg f5 pa2 bg-animate pointer br3">Sign Out</p>
                </div>
                :
                ( route === 'SignIn' || route === 'SignOut' ?
                <div className='flex-grow ph3 flex items-center'>
                    <p onClick={() =>onRouteChange('Register')} 
                    className="btnImg f5 pa2 bg-animate pointer br3">Register</p>
                </div>
                :
                <div className='flex-grow ph3 flex items-center'>
                    <p onClick={() =>onRouteChange('SignIn')} 
                    className="btnImg f5 pa2 bg-animate pointer br3">Sign In</p>
                </div>
                )}
            </nav>
        </header>
    )
}

export default Navigation;