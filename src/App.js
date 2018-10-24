import React, { Component, Fragment } from 'react';
import Header from './Header';
import ListContainer from './ListContainer';
import AddForm from './AddForm';

class App extends Component {
  constructor(){
    super()
    this.state = {
      characters: [
          {id: 1, name: "Ichigo", universe: "Bleach", editable: "false" },
          {id: 2, name: "Sasuke", universe: "Naruto", editable: "false" },
          {id: 3, name: "Goku", universe: "Dragonball", editable: "false" }
      ]
    }
  }

  addItem = (item) =>{
    let chars = {...this.state};
    chars.characters.push(item);
    this.setState({characters:chars.characters})
   
  }

  updateItem = (item) =>{
    let char = this.state.characters.map((c) => {
      if(c.id === item.id){
        c.name = item.name
        c.universe = item.universe
      }
      return c
    })
    this.setState({characters:char})
  }

  deleteItem = (item) =>{
    let chars = this.state.characters
    chars = chars.filter((el)=>{
      return el.id !== item.id;
    })
    this.setState({characters: chars});
  }

  render() {
    return (    
      <Fragment>
      <Header/>
      <main className="main">
      <ListContainer updateItem={this.updateItem} deleteItem={this.deleteItem} characters={this.state.characters}>
      </ListContainer>
      <AddForm addItem={this.addItem}>
      </AddForm>
      </main>
      </Fragment>
    );
  }
}

export default App;
