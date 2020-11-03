import React, { Component } from 'react';
import fetch from 'superagent';
import Header from './Header.js'
import RogueList from './RogueList.js';

export default class RoguesPage extends Component {
    state = {
        rogues: [],
        loading: false,
    }
    componentDidMount = async () => {
        const rogue = await fetch.get(`https://salty-meadow-30783.herokuapp.com/rogues`)

        this.setState({
            rogues: rogue.body,
            loading: false
        })

        console.log(this.state.rogues)
    }

    handleBoolean = async (e) => {
        
    }

    render() {
        return (
            <div>
                <Header />
                <div className="rogues">
                {
                    this.state.rogues.length === 0
                    ? <img className="loading" src="/BatmanLogo.png" alt="loading..." />
                    : this.state.rogues.map(rogues =>
                        <div key={rogues.rogues}>
                            <RogueList
                            rogues={rogues}/>
                        </div>
                )}
                </div>
            </div>
        )
    }
}
