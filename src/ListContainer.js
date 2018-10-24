import React, { Component} from 'react';
import './App.css';
import Character from './Character';


export default class ListContainer extends Component{

    render(){
        return(
        <div className="Container">
        <h1>Characters</h1>
        <ul className="ul">
        {this.props.characters.map( (character) =>
        <Character deleteItem={this.props.deleteItem} updateItem={this.props.updateItem} key={character.id} character={character}/>
        )}
        </ul>
        </div>
        )
    }
}