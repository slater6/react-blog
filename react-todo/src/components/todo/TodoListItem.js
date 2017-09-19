import React from 'react';

export const TodoListItem = (props) => (
    <li>
        <input type="checkbox" defaultChecked={props.isComplete}/>{props.name}
    </li>
)