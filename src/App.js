import "./App.css";

import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      arr: [
        { id: 0, task: "eat", done: false },
        { id: 1, task: "sleep", done: false },
        { id: 2, task: "repeat", done: false },
      ],
      text : ""
    };
  }
  btnadd(){
    this.setState({
      arr : [...this.state.arr , {id : Math.random , done : false , task : this.state.text }]
    })
  }
  btndelete(id){
    this.setState({
      arr : this.state.arr.filter(el=> el.id != id)
    })
  }
  btndone(id){
    this.setState({
      arr : this.state.arr.map(el => el.id == id ? {...el  , done : !el.done} : el )
    })
  }

  render() {
    return (
      <div>
        <input onChange={(event)=> this.setState({text : event.target.value})} />
        <button onClick={()=> this.btnadd()}>Add</button>

        {this.state.arr.map(el=> 
        <div>
        <li style={{color :  el.done == true ? 'blue'  : null }} > {el.task} </li> 
        <button onClick={()=> this.btndone(el.id)}>Done</button>
        <button onClick={()=> this.btndelete(el.id)}>Delete</button>
        </div>
        )}
      </div>
    );
  }
}

export default App;
