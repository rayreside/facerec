import React from 'react';
import './Register.css';

const Register= ({ onRouteChange }) => {
    return(
        <div className='regForm w-40-l w-90 br3'>
            <article className="br3 w-100">
                <h1 className="f4 black br3 br--top mv0 pv3">Register</h1>
                <div className="flannel flex flex-column items-center regForm-inner br3 br--bottom ph4 pv3 w-100">
                    <fieldset id="register" className="b--transparent">
                        <input className="pa2 mb2 br2 b input-reset bn w-100" type="text" name="name" placeholder='Name' id="name" />
                        <input className="pa2 mb2 br2 b input-reset bn w-100" type="email" name="email-address" placeholder='Email' id="email-address" />
                        <input className="pa2 mb2 br2 b input-reset bn w-100" type="password" name="password" placeholder='Password' id="password" />
                        <input className="pa2 mb2 br2 b input-reset bn w-100" type="password" name="confpassword" placeholder='Confirm Password' id="confpassword" />
                    </fieldset>
                    <input 
                        onClick={() =>onRouteChange('home')} 
                        className="btnImg bg-animate b br2 ph3 pv2 input-reset ba bw1 b--near-white pointer f5 dib" 
                        type="submit" 
                        value="Register" />
                    <p onClick={() =>onRouteChange('SignIn')} 
                    className="yBG ph2 dib f5 b pointer">Already have an account? Sign in</p>
                </div>
            </article>
        </div>
    )
}

export default Register;