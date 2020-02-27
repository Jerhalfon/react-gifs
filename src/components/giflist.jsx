import React, { Component } from 'react';
import Gif from './gif';

class Giflist extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div className="gif-list">
                {this.props.mygiflist.map( gif => <Gif id={gif.id} />)}
            </div>
        )
    }
}



export default Giflist;