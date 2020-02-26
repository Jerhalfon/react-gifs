import React, { Component } from 'react';
import Navbar from './components/navbar';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <Navbar/>
            </div>
        )
    }
}

export default App;