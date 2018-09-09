import React, {Component} from 'react';
import './Login.css';

export default class Login extends Component {
    login(){
        const {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }

    render(){
        return(
            <div>
                <button className='login_button' onClick={this.login}>Sign up / Login</button>
            </div>
        )
    }
}