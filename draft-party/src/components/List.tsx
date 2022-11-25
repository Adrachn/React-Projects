// Take an array of objects and render as objects (cards)

import React from 'react'
import {IState as IProps } from "../App";

const List: React.FC<IProps> = ({champion}) => {

    // Want to return JSX Elements that is an array
    const renderList = () : JSX.Element[] => {
        return champion.map((champion) => {
           return(
                <li className ="List">
                    <div className="List-header">
                        <img className="List-img" src={champion.url}/>
                        <h2>{champion.name}</h2>
                    </div>
                    <p> {champion.dmgType} </p>
                    <p className="List-note">{champion.note}</p>
                </li>
           )
        })
    }

    return(
        <ul>
           {renderList()}
        </ul>
    )
}
export default List;