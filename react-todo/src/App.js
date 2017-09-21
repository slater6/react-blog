import React, { Component } from 'react';
import logo from './logo.svg';
import { TodoForm, TodoList, Footer }  from './components/todo';
import {addTodo, findById, toggleTodo, updateTodo, removeTodo} from './lib/TodoHelpers'
import {partial,pipe} from './lib/utils'
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
    const getUpdateTodos = pipe (findById, toggleTodo, partial(updateTodo,this.state.todos))
    const updatedTodos = getUpdateTodos(id,this.state.todos)
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

  handleMultipleTodoRemoval = (id) => {

    const todos = this.state.todos.filter(( todo ) => !todo.isComplete)

    this.setState({
      todos 
    })
    
  }

  handleTodoRemoval = (id,evt) => {
    
    evt.preventDefault();

    const todos = removeTodo(this.state.todos, id)

    this.setState({
      todos 
    })
    
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

    const todos = addTodo(this.state.todos,newTodo);
    
    this.setState(
      {
        todos,
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
          <TodoList handleToggle={this.handleToggle} handleMultipleTodoRemoval={this.handleMultipleTodoRemoval} handleTodoRemoval={this.handleTodoRemoval} todos={this.state.todos}/>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
