import React from 'react';
import './SignIn.css';

const SignIn= ({ onRouteChange }) => {
    return(
        <div className='signForm w-40-l w-90 br3'>
            <article className="br3 w-100">
                <h1 className="f4 black br3 br--top mv0 pv3">Sign In</h1>
                <div className="flannel flex flex-column items-center signForm-inner br3 br--bottom ph4 pv3 w-100">
                    <fieldset id="sign_up" className="b--transparent w-100">
                        <input className="pa2 mb2 br2 input-reset ba bw1 w-100" type="email" name="email-address" placeholder='Email'  id="email-address" />
                        <input className="b br2 pa2 input-reset ba bw1 w-100" type="password" name="password" placeholder='Password'  id="password" />
                    </fieldset>
                    <input 
                        onClick={() =>onRouteChange('home')} 
                        className="btnImg bg-animate b br2 ph3 pv2 input-reset ba pointer f5 dib" 
                        type="submit" 
                        value="Sign in" />
                    <p onClick={() =>onRouteChange('Register')} 
                        className="yBG dib f5 b pointer">Don't have an account? Sign up</p>
                </div>
            </article>
        </div>
    )
}

export default SignIn;