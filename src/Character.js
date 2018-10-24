import React, {Component} from 'react';
import './App.css';

export default class Character extends Component{
    constructor(props){
        super(props);
        this.state = {
                id: this.props.character.id, 
                name: this.props.character.name, 
                universe: this.props.character.universe, 
                editable: this.props.character.editable
                

        }
    }

    toggleEdit = (ev) =>{
        let char = {...this.state}
        char.editable = "true";
        this.setState({...char})
        setTimeout(()=>{
            this.refs.name.value = this.state.name;
            this.refs.verse.value = this.state.universe;
        }, 10)
        
       
    }

    updateName = (ev) =>{
        let char = {...this.state}
        char.name = this.refs.name.value
        char.universe = this.refs.verse.value
        char.editable = "false"
        this.setState({...char})
        this.props.updateItem(char);

    }

    deleteItem = (ev) =>{
        let char = {...this.state}
        this.props.deleteItem(char)
    }
    render(){

        return(
        <li className="character">
            <div className={this.state.editable}>
            <div className="labels">
            <p ref="nameLabel" className="nameLabel">Name: {this.state.name}</p>
            <p ref="verseLabel" className="verseLabel">Show: {this.state.universe}</p>
            </div>
            <div className="buttons">
            <button onClick={this.toggleEdit}>Edit</button><br/>
            <button onClick={this.deleteItem}>Delete</button>
            </div>
            </div>
            {
            this.state.editable ==="true" &&
            <form className="charForm">
                <input className="name" ref="name"/>
                <input className="verse" ref="verse"/>
                <button onClick={this.updateName} className="save">Save</button>
            </form>
            }
        </li>
        )
    }
}
