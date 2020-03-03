import React from 'react';
import './SignIn.css';

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value});
    }

    onSubmit = (event) => {
        event.preventDefault()
        fetch('http://localhost:3000/signin', {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        .then(response => response.json())
        .then(user => {
            if (user.id) {
                this.props.logUser(user);
                this.props.onRouteChange('home');
            }
            else console.log('Wrong credentials.');
        })
        .catch(err => console.log(err))
    }

    render() {
        const { onRouteChange } = this.props;
        return(
            <div className='signForm w-40-l w-60-m w-100'>
                <div className="signBar br3-ns br--top-ns pv3"></div>
                <form onSubmit={this.onSubmit} className="flannel flex flex-column items-center signForm-inner br3-ns br--bottom-ns ph4-ns pv3 w-100">
                    <fieldset id="sign_up" className="b--transparent w-100">
                        <input 
                            className="b pa2 br2 input-reset bn w-100 mb2" 
                            type="email" 
                            name="email-address" 
                            placeholder='Email'  
                            id="email-address"
                            onChange = {this.onEmailChange}
                        />
                        <input 
                            className="b pa2 br2 input-reset bn w-100 mb2" 
                            type="password" 
                            name="password" 
                            placeholder='Password'  
                            id="password"
                            onChange = {this.onPasswordChange}
                        />
                    </fieldset>
                    <input 
                        className="btnImg bg-animate b br2 ph3 pv2 input-reset ba bw1 b--near-white pointer f4 dib" 
                        type="submit" 
                        value="Sign in" />
                    <p onClick={() => onRouteChange('Register')} 
                        className="yBG ph2 dib f5-ns f6 b pointer">Don't have an account? Sign up</p>
                </form>
            </div>
        );
    }
}

export default SignIn;