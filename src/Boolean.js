import React, { Component } from 'react'

export default class Boolean extends Component {
    render() {
        return (
            <div>
                {this.props.alive
                    ?
                    <span style={{color: "yellowgreen"}}>Alive</span>
                    :
                    <span style={{color: "red"}}>Deceased</span>
                }
            </div>
        )
    }
}
