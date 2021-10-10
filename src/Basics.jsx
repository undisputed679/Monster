import React, { Component } from 'react'
import { CardList } from './components/cardlist/CardList';

export default class Basics extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({ monsters: user }))
    }
    render() {
        return (
            //yaha monsters naam me daal diye pura array monsters wala
            //monsters ke jagah kuch bhi naam ho saktahai

            <div style={{margin:0,padding:0}}>
                <CardList monsters={this.state.monsters}> </CardList>
            </div>
        )
    }
}
