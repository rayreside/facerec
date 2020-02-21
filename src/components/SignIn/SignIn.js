import React from 'react';
import './SignIn.css';

const SignIn= ({ onRouteChange }) => {
    return(
        <div className='signForm mainContent center w-30-l w-90'>
            <article className="flannel br3 w-100">
                <h1 className="f3 black br3-ns br--top-ns mv0 pv3">Sign In</h1>
                <main className="pa4 w-100 black-80">
                    <div className="signForm-inner br3 pa3 w-100">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        </fieldset>
                        <div className="">
                        <input 
                            onClick={() =>onRouteChange('home')} 
                            className="btnImg bg-animate b br2 ph3 pv2 input-reset ba pointer f5 dib" 
                            type="submit" 
                            value="Sign in" />
                        </div>
                        <div className="lh-copy mt3">
                        <p 
                            onClick={() =>onRouteChange('Register')} 
                            className="f6 link dim black db pointer">Don't have an account? Register</p>
                        </div>
                    </div>
                </main>
            </article>
        </div>
    )
}

export default SignIn;