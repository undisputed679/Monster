import React, { Component } from 'react'
import { CardList } from './components/cardlist/CardList';
import { SearchBox } from './components/searchbox/Searchbox';
import './basic.css'


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
            <div className="back"  >
                <h1 style={{fontFamily: 'Bigelow Rules',fontSize:'72px',textAlign:'center',
            color:'#0ccac4'}}>Monsters Rolodex</h1>
                <div style={{marginLeft:"45%"}}>
                
                <SearchBox
                     placeholder="Search Monster"
                     handleChange={e=>this.setState({searchfield:e.target.value})}
                 />
                </div>
                 
                <CardList monsters={filterdMonsters}> </CardList>
            </div>
        )
    }
}
