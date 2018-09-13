import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateUser} from '../../../ducks/reducer';
import axios from 'axios';


class Private extends Component {
    constructor(props){
        super(props);

        this.state = {
            user: {}
        }
    }

    async componentDidMount(){
        let userData = await axios.get('/api/user-data');
        this.props.updateUser(userData.data)
    }

    render(){
        let {user} = this.props;
        return(
            <div>
                <h1>Account Details</h1>
                <hr /><hr /><hr />
                {
                    user.user_name ? (
                        <div>
                            <p>Account Holder: {user.user_name}</p>
                            <p>Email: {user.email}</p>
                            <p>Account ID: {user.auth_id}</p>
                            <img src={user.picture} alt=""/>
                        </div>
                    )
                    : (<p>Please log in</p>)
                }
                <a href={process.env.REACT_APP_LOGOUT}>
                    <button>Lougout</button>
                </a>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {updateUser})(Private);