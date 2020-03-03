import React from 'react';
import './Register.css';

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            confPassword: ''
        }
    }

    onNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    onConfPasswordChange = (event) => {
        this.setState({confPassword: event.target.value});
    }

    onSubmit = (event) => {
        const { name, email, password, confPassword } = this.state;
        event.preventDefault();
        if (password === confPassword) {
            fetch('https://afternoon-springs-61219.herokuapp.com/register', {
                method: 'post',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            })
            .then(response => response.json())
            .then(user => {
                if (typeof user.id !== 'undefined') {
                    this.props.logUser(user);
                    this.props.onRouteChange('home');
                } else console.log('Please fill out the fields properly.');
            })
            .catch(err => console.log(err))
        } else console.log('Passwords do not match.');
    }

    render() {
        const { onRouteChange } = this.props;
        return(
            <div className='regForm w-40-l w-60-m w-100'>
                <div className="regBar br3-ns br--top-ns pv3"></div>
                <form onSubmit={this.onSubmit} className="flannel flex flex-column items-center regForm-inner br3-ns br--bottom-ns ph4-ns pv3 w-100">
                    <fieldset id="register" className="b--transparent w-100">
                        <input 
                            className="b pa2 br2 input-reset bn w-100 mb2" 
                            type="text" 
                            name="name" 
                            placeholder='Name' 
                            id="name"
                            onChange = {this.onNameChange} 
                            required />
                        <input 
                            className="b pa2 br2 input-reset bn w-100 mb2" 
                            type="email" 
                            name="email-address" 
                            placeholder='Email' 
                            id="email-address" 
                            onChange = {this.onEmailChange} 
                            required />
                        <input 
                            className="b pa2 br2 input-reset bn w-100 mb2" 
                            type="password" 
                            name="password" 
                            placeholder='Password' 
                            id="password"
                            onChange = {this.onPasswordChange} 
                            required />
                        <input 
                            className="b pa2 br2 input-reset bn w-100 mb2" 
                            type="password" 
                            name="confpassword" 
                            placeholder='Confirm Password' 
                            id="confpassword" 
                            onChange = {this.onConfPasswordChange} 
                            required />
                    </fieldset>
                    <input 
                        className="btnImg bg-animate b br2 ph3 pv2 input-reset ba bw1 b--near-white pointer f4 dib" 
                        type="submit" 
                        value="Register" />
                    <p onClick={() =>onRouteChange('SignIn')} 
                    className="yBG ph2 dib f5-ns f6 b pointer">Already have an account? Sign in</p>
                </form>
            </div>
        )
    }
}

export default Register;