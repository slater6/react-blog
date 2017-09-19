import React, { Component } from 'react';
import logo from './logo.svg';
import { TodoForm, TodoList }  from './components/todo';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos:[
        {id:1, name:'Learn JSX',isComplete:false},
        {id:2, name:'Learn Redux',isComplete:true},
        {id:3, name:'Learn Vue',isComplete:false},
      ],
      currentTodo: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    this.setState({
      currentTodo:event.target.value
    }); 
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div> 
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo}/>
          <TodoList todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
