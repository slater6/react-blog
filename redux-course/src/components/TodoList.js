import React from 'react'
import {connect} from 'react-redux'
import {TodoListItem} from './TodoListItem'

const TodoList = (props) => (
    <div className="Todo-List">
        <ul>
            {props.todos.map( todo => (
               <TodoListItem key={todo.id} todo={todo}></TodoListItem>
            ))}
        </ul>
    </div>
)

export default connect(
    (state) => ({
        todos: state.todos
    })
)(TodoList)