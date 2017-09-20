import React, { Component } from 'react';
import logo from './logo.svg';
import { TodoForm, TodoList }  from './components/todo';
import {addTodo, findById, toggleTodo, updateTodo} from './lib/TodoHelpers'
import './App.css';

class App extends Component {
  
  state = {
    todos:[
      {id:1, name:'Learn JSX',isComplete:false},
      {id:2, name:'Learn Redux',isComplete:true},
      {id:3, name:'Learn Vue',isComplete:false},
    ],
    currentTodo: '',
    errorMessage: ''
  }

  handleToggle = (id) => {
    const todo = findById(id,this.state.todos);
    const toggled = toggleTodo(todo);
    const updatedTodos = updateTodo(this.state.todos,toggled)
    this.setState(
      {
        todos:updatedTodos
      }
    );
  }

  handleInputChange = (event) => {
    this.setState({
      currentTodo:event.target.value,
      errorMessage: ''
    }); 
  }

  handleSubmit = (event) => {
    event.preventDefault();

    if(this.state.currentTodo === ""){
      this.setState({
        errorMessage: "Please enter a valid Todo item"
      });
      return;
    }
    
    const newTodo = {
      id: Math.floor((Math.random() * 1000) + 1),
      name:this.state.currentTodo,
      isComplete:false
    }

    const updatedTodos = addTodo(this.state.todos,newTodo);
    
    this.setState(
      {
        todos: updatedTodos,
        currentTodo: ''
      }
    )
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div> 
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} currentTodo={this.state.currentTodo}/>
          <span className="error">{this.state.errorMessage}</span>
          <TodoList handleToggle={this.handleToggle} todos={this.state.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
