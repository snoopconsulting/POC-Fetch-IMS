import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapForms from '../MapForms/MapForms';
import Loading from '../../Img/loading.gif';
import {URL_FORMS} from '../utils';

class CheckEndPoint extends Component {
    constructor(props) {
        super(props);
        this.state = { List: null, Loading: false };
      }

    handleCheckEndPoint = () => {
        let {token} = this.props;
        this.setState({Loading: true});
        fetch(URL_FORMS, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${token}`
            },
          }).then(response => response.json()).then(data => {
            this.setState({ List: data.forms });
            this.setState({Loading: false});
            console.log(data)
          });
    };

    render() {  
        let label = <label>Primero lo primero</label> 
        

        return (
            <div>
                <button onClick={this.handleCheckEndPoint}>Chequear EndPoint</button>
                <br></br>
                {this.state.Loading? <img src={Loading} alt="loading..." />: ""}
                {this.state.List?
                <MapForms List={this.state.List}></MapForms> : ""
                }
            </div>
        );
    }
}

CheckEndPoint.propTypes = {
    token: PropTypes.string.isRequired,
};

export default CheckEndPoint;   