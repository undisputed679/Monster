import React, { Component } from 'react'

export default class Basics extends Component {
    constructor(){
        super();
        this.state={
            String:'hello i am here'
        };
    }
    render() {
        return (
            <div>
                <p>{this.state.String}</p>
                <button onClick={()=>this.setState({String:'this is changed'})}>Change text</button>
            </div>
        )
    }
}
