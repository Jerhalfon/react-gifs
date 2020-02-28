import React, { Component } from 'react';
import Navbar from './navbar';
import Gif from './gif';
import Giflist from './giflist';
import Giphy from 'giphy-api';

const GIPHY_API_KEY = 'RbHDpbgrkGGuLftrpTohn9xNntdtywXP'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mygiflist: [],
            selectedgifId: "vfzjjDy7pD0mQ"

        }
    }
    search = (query) => {
        Giphy({ apiKey: GIPHY_API_KEY, https: true })
            .search({
                q: query,
                rating: 'g',
                limit: 10
            }, (err, result) => {
                this.setState({
                    mygiflist: result.data
                });
            });
    }

    selectgif = (id) => {
        this.setState({
            selectedgifId: id
        });
    }

    render() {
        return (
            <div>
                <div className="left-scene">
                    <Navbar search={this.search} />
                    <div className="selected-gif">
                        <Gif id={this.state.selectedgifId} />
                    </div>
                </div>
                <div className="right-scene">
                    <Giflist mygiflist={this.state.mygiflist} selectgif={this.selectgif} />
                </div>
            </div>
        );
    }
}



export default App;