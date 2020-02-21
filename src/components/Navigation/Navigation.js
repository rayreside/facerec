import React from 'react';
import './Navigation.css';
import Logo from './Logo/Logo.js';

const Navigation = ({ onRouteChange, route, isSignedIn }) => {
    return (
        <header className="fixed w-100">
            <nav className="mainNav tracked">
                <Logo />
                { isSignedIn ?
                <div className='buffer right mr4'>
                    <p onClick={() =>onRouteChange('SignOut')} 
                    className="btnImg h-100 f4 pa3 ba bw1 bg-animate pointer br3">Sign Out</p>
                </div>
                :
                ( route === 'SignIn' || route === 'SignOut' ?
                <div className='buffer right mr4'>
                    <p onClick={() =>onRouteChange('Register')} 
                    className="btnImg h-100 f4 pa3 ba bw1 bg-animate pointer br3">Register</p>
                </div>
                :
                <div className='buffer right mr4'>
                    <p onClick={() =>onRouteChange('SignIn')} 
                    className="btnImg h-100 f4 pa3 ba bw1 bg-animate pointer br3">Sign In</p>
                </div>
                )}
            </nav>
        </header>
    )
}

export default Navigation;