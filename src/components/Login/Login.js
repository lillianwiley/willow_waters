import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './Login.css';

class Login extends Component {
    constructor() {
        super();

        this.handleLoginLogout = this.handleLoginLogout.bind(this)
    }
    login() {
        const { REACT_APP_DOMAIN, REACT_APP_CLIENT_ID } = process.env;
        let url = `${encodeURIComponent(window.location.origin)}/auth/callback`
        window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${url}&response_type=code`
    }

    logout() {
        window.location = 'http://localhost:3030/auth/logout'
    }

    handleLoginLogout() {
        if (this.props.user.id) {
            this.logout()
        }
        else {
            this.login()
        }
    }

    render() {
        console.log(this.props.user)
        return (
            <button className='login_button' onClick={this.handleLoginLogout}>{this.props.user.id ? 'Logout' : 'Login / Sign Up'}</button>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Login)
