import React, { Component } from 'react'
import Boolean from './Boolean.js'

export default class RogueList extends Component {
    render() {
        return (
            <div>
                <h1 className="alias">{this.props.rogues.alias}</h1>
                <h2>{this.props.rogues.name}</h2>
                <p className="alive">Status: <Boolean alive={this.props.rogues.alive}/></p>
                <p className="year-introduced">Year Introduced: 
                <p className="year">{this.props.rogues.year}</p>
                </p>
            </div>
        )
    }
}
