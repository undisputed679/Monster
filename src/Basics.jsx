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
            <div>
                <CardList name="i am name">
                    {
                        this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
                    }
                </CardList>



            </div>
        )
    }
}
