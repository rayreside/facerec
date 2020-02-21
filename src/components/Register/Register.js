import React from 'react';
import './Register.css';

const Register= ({ onRouteChange }) => {
    return(
        <div className='regForm mainContent center w-30-l w-100-m'>
            <article className="flannel br3 w-100">
                <h1 className="f3 black br3 br--top-ns mv0 pv3">Register</h1>
                <main className="pa4 w-100 black-80">
                    <div className="regForm-inner br3 pa3 w-100">
                        <fieldset id="register" className="ba b--transparent ph0 mh0">
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
                            <input className="pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input className="pa2 br2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input className="b br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Confirm Password</label>
                            <input className="b br2 pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="confpassword"  id="confpassword" />
                        </div>
                        </fieldset>
                        <div className='mv2'>
                            <input 
                                onClick={() =>onRouteChange('SignIn')} 
                                className="btnImg bg-animate b br2 ph3 pv2 input-reset ba pointer f5 dib" 
                                type="submit" 
                                value="Register" />
                        </div>
                    </div>
                </main>
            </article>
        </div>
    )
}

export default Register;