import React, {Component} from 'react'
import {connect} from 'react-redux'
import {TodoListItem} from './TodoListItem'
import {fetchTodos} from '../reducers/todo'

class TodoList extends Component {

    componentDidMount(){
        this.props.fetchTodos()
    }

    render(){
        return(
            <div className="Todo-List">
                <ul>
                    {this.props.todos.map( todo => (
                    <TodoListItem key={todo.id} todo={todo}></TodoListItem>
                    ))}
                </ul>
            </div>
        )
    }
}
    

export default connect(
    (state) => ({
        todos: state.todos
    }),
    {fetchTodos}
)(TodoList)