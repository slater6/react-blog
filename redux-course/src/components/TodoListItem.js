import React from 'react'

export const TodoListItem = (props) => (
    <li key={props.todo.id}>
        <input type="checkbox" defaultChecked={props.todo.isComplete} onChange={() => props.toggleTodo(props.todo.id)}/>
        {props.todo.name}
    </li>
)