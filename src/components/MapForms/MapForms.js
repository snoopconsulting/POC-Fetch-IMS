import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MapForms extends Component {
    constructor(props) {
        super(props);
        this.state = { List: this.props.List};
      }
      componentDidMount(){
        this.setState({ List: this.props.List });
      }
    render() {
        return (
            
            <div>
                {(this.state.List)?
                <table>
                    <thead>
                        <tr>
                            <th>campaign_CUC</th>
                            <th>campaign_name</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.List.map((item,i) => 
                    <tr key={i}>
                        <td>{item.campaign_CUC}</td>
                        <td>{item.campaign_name}</td>
                    </tr>
                    
                    )}
                    </tbody>
                </table>
                :
                <div></div>}
            </div>
        );
    }
}

MapForms.propTypes = {
    List: PropTypes.array.isRequired,
};

export default MapForms;