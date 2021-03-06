import React, { Component } from 'react';

class Gif extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.selectgif(this.props.id);
    }
    render(){
        const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`
        return (
            <img src={src} 
            className="gif"
            onClick={this.handleClick}/>
        );
    }
}



export default Gif;