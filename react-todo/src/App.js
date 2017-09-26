import React, { Component } from 'react';
import PropTypes from 'prop-types'
import logo from './logo.svg';
import { TodoForm, TodoList, Footer }  from './components/todo';
import {addTodo, findById, toggleTodo, updateTodo, removeTodo, filterTodos} from './lib/TodoHelpers'
import {partial,pipe} from './lib/utils'
import './App.css';
import {loadTodos,createTodo, saveTodo, deleteTodo} from './lib/TodoService'

class App extends Component {
  
  state = {
    todos:[],
    currentTodo: '',
    errorMessage: '',
    successMessage: ''
  }

  static contextTypes = {
    route: PropTypes.string
  }

  async componentDidMount(){
    const todos = await loadTodos() 
    this.setState({todos})
  }

  handleToggle = (id) => {
    const getToggleTodo = pipe (findById, toggleTodo)
    const updated = getToggleTodo(id,this.state.todos)
    const getUpdateTodos = partial(updateTodo,this.state.todos)
    const updatedTodos = getUpdateTodos(updated)
    saveTodo(updated).then( () => {
      this.setState(
        {
          todos:updatedTodos
        }
      );

      this.showTempMessage(`Todo: ${updated.name} Status Updated!`)

    })
  
  }

  handleInputChange = (event) => {
    this.setState({
      currentTodo:event.target.value,
      errorMessage: ''
    }); 
  }

  handleMultipleTodoRemoval = (id) => {

    const todos = this.state.todos.filter(( todo ) => !todo.isComplete)

    this.state.todos.map((todo) => {
      if(todo.isComplete){
        deleteTodo(todo.id).then(() => {
          this.showTempMessage(`Todo: ${todo.name} Deleted!`)
        })
      }
    })

    this.setState({
      todos 
    })
    
  }

  handleTodoRemoval = (id,evt) => {
    
    evt.preventDefault();

    deleteTodo(id).then(() => {
      const todos = removeTodo(this.state.todos, id)
    
      this.setState({
        todos 
      })
      
      this.showTempMessage(`Todo Deleted!`)
    })

    
    
  }

 handleSubmit = async (event) => {
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

    createTodo(newTodo).then((todo) => {
      
      const todos = addTodo(this.state.todos,todo);
      
      this.setState(
        {
          todos,
          currentTodo: ''
        }
      )

      this.showTempMessage('Todo Saved!')
    })
  }

  showTempMessage = (message) => {
    this.setState({ successMessage : message});
    setTimeout(() => this.setState({successMessage:''}),2500)
  }

  render() {
    const displayTodos = filterTodos(this.state.todos, this.context.route)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Todos</h2>
        </div> 
        <div className="Todo-App">
          <TodoForm handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit} currentTodo={this.state.currentTodo}/>
          <span className="error">{this.state.errorMessage}</span>
          <span className="success">{this.state.successMessage}</span>
          <TodoList handleToggle={this.handleToggle} handleMultipleTodoRemoval={this.handleMultipleTodoRemoval} handleTodoRemoval={this.handleTodoRemoval} todos={displayTodos}/>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
