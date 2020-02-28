import React, { Component } from 'react';
import App from './app';

class Navbar extends Component {
    constructor(props) {
        super(props);
    }
handleUpdate = (event) => {
    this.props.search(event.target.value);
}
    render(){
        return (
            <input 
            type="text" 
            className="form-search form-control" 
            onChange={this.handleUpdate}
            />
        );
    }
}

export default Navbar;