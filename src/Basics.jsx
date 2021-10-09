import React, { Component } from 'react'

export default class Basics extends Component {
    constructor(){
        super();
        this.state={
            monsters:[
                {
                    name:'kilwish',
                    id:1
                },
                {
                    name:'dracula',
                    id :2
                },
                {
                    name:'zombie',
                    id:3
                }
            ],
          
        };
    }
    render() {
        return (
            <div>
               {
                   this.state.monsters.map(monster=><h1 key={monster.id}>{monster.name}</h1>)
               }
              
            </div>
        )
    }
}
