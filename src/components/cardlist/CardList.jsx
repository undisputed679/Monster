import React from "react";
import './cardlistStyle.css';
import { Card } from "../card/Card";
 

export const CardList = (props)=>{
    return <div className='card-list'>

        {props.monsters.map(monster => <Card key={monster.id} monster={monster} />)
        /*yaha pe props use kiye hai this.state ke jagah becz card component me
        render ho rha hai ye or waha pe ek monsters naam ka props dale hai*/

    }</div>
}