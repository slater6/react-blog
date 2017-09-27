import React from 'react'

export const TodoListItem = (props) => (
    <li key={props.todo.id}>
        <input type="checkbox" defaultChecked={props.todo.isComplete}/>
        {props.todo.name}
    </li>
)