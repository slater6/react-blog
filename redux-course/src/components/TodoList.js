import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TodoListItem} from './TodoListItem'
import {fetchTodos, toggleTodo} from '../reducers/todo'

class TodoList extends Component {

    componentDidMount(){
        this.props.fetchTodos()
    }

    render(){
        return(
            <div className="Todo-List">
                <ul>
                    {this.props.todos.map( todo => (
                    <TodoListItem key={todo.id} todo={todo} toggleTodo={this.props.toggleTodo}></TodoListItem>
                    ))}
                </ul>
            </div>
        )
    }
}
    

export default connect(
    (state) => ({
        todos: state.todo.todos
    }),
    {fetchTodos,toggleTodo}
)(TodoList)