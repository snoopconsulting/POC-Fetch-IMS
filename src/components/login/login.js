import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CheckEndPoint  from '../CheckEndPoint/CheckEndPoint';
import {URL_LOGIN} from '../utils';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = { token: null };
      }

    handleLogin = () => {
        const {usuario,pass} = this.props;
        const data ={
            user: usuario,
            password: pass
        };
        fetch(URL_LOGIN, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            },
          }).then(response => response.json()).then(data => {
            this.setState({ token: data.token });
            console.log(data.token)
          });
    };

    render()  {
       
        return (
            <div>
                <button onClick={this.handleLogin}>Login</button>
                 
                {(!this.state.token)? <div></div>: 
                <div>
                    <label>{`Token: ${this.state.token}`}</label>
                    <CheckEndPoint token={this.state.token}></CheckEndPoint> 
                </div>
                }
            </div>
        );
    }
}

Login.propTypes = {
    usuario: PropTypes.string.isRequired,
    pass: PropTypes.string.isRequired,
};

export default Login; 