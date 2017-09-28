import React, { Component } from 'react';
import logo from './logo.svg';
import {TodoForm, TodoList} from './components'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="Todo-App">
          <TodoForm currentTodo={this.props.currentTodo} changeCurrent={this.props.changeCurrent}/>
          <TodoList todos={this.props.todos}/>
        </div>
      </div>
    );
  }
}

export default App;
