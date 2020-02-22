import React from 'react';
import './Register.css';

const Register= ({ onRouteChange }) => {
    return(
        <div className='regForm w-40-l w-60-m w-100'>
            <div className="regBar br3-ns br--top-ns pv3"></div>
            <div className="flannel flex flex-column items-center regForm-inner br3-ns br--bottom-ns ph4-ns pv3 w-100">
                <fieldset id="register" className="b--transparent w-100">
                    <input className="b pa2 br2 input-reset bn w-100 mb2" type="text" name="name" placeholder='Name' id="name" />
                    <input className="b pa2 br2 input-reset bn w-100 mb2" type="email" name="email-address" placeholder='Email' id="email-address" />
                    <input className="b pa2 br2 input-reset bn w-100 mb2" type="password" name="password" placeholder='Password' id="password" />
                    <input className="b pa2 br2 input-reset bn w-100 mb2" type="password" name="confpassword" placeholder='Confirm Password' id="confpassword" />
                </fieldset>
                <input 
                    onClick={() =>onRouteChange('home')} 
                    className="btnImg bg-animate b br2 ph3 pv2 input-reset ba bw1 b--near-white pointer f4 dib" 
                    type="submit" 
                    value="Register" />
                <p onClick={() =>onRouteChange('SignIn')} 
                className="yBG ph2 dib f5-ns f6 b pointer">Already have an account? Sign in</p>
            </div>
        </div>
    )
}

export default Register;