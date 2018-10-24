import React, {Component} from 'react';
import './App.css';

export default class AddForm extends Component{
    addChar = (ev) =>{
    ev.preventDefault()
    let obj = {id: Date.now(), name: this.refs.name.value, universe: this.refs.verse.value, editable: "false"}
    this.props.addItem(obj);
    this.refs.name.value = ""
    this.refs.verse.value = ""
    }
    render(){
        return(
            <div className="formDiv">
            <h1 className="addChar">Add Character</h1>
                <form  className="mainForm">
                    <p className="characterLabel">Character Name
                    <input ref="name"/>
                    </p>
                    
                    <p className="showLabel">Show Name
                    <input ref="verse"/>
                    </p>
                </form>
                <button className="saveButton" onClick={this.addChar}>Save</button>
            </div>
        )
    }
}