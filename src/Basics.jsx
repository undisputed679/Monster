import React, { Component } from 'react'
import { CardList } from './components/cardlist/CardList';

export default class Basics extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchfield:''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(user => this.setState({ monsters: user }))
    }
    render() {
        const {monsters,searchfield}=this.state;
        const filterdMonsters=monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchfield.toLowerCase()));
        return (
            <div style={{margin:0,padding:0}}>
                <input type="search"  placeholder="Search Monster"
                 onChange={e=>this.setState({searchfield:e.target.value})}/>
                <CardList monsters={filterdMonsters}> </CardList>
            </div>
        )
    }
}
