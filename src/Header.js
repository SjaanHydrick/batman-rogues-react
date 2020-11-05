import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1 className="header">Batman's Rogues' Gallery</h1>
            <div>
                <Link to="/create" className="add">Add Rogue</Link>
            </div>
            </div>
        )
    }
}
