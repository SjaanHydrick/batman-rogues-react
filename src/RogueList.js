import React, { Component } from 'react'
import Boolean from './Boolean.js'
import { Link } from 'react-router-dom';

export default class RogueList extends Component {
    render() {
        return (
            <div className="rogue">
                <Link className="link-id" to={`/update/${this.props.rogues.id}`}>
                <h1 className="alias">{this.props.rogues.alias}</h1>
                <h2>{this.props.rogues.name}</h2>
                <p className="alive">Status: <Boolean alive={this.props.rogues.alive}/></p>
                <div className="year-introduced">Year Introduced: 
                <p className="year">{this.props.rogues.year}</p>
                </div>
                </Link>
            </div>
        )
    }
}
