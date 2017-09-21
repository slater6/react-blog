import React from 'react';
import {partial} from '../../lib/utils';

export const TodoListItem = (props) => {
    const handleToggle = partial(props.handleToggle,props.id);
    const handleRemoval = partial(props.handleTodoRemoval,props.id);
    return (
    <li>
        <input type="checkbox" onChange={handleToggle} checked={props.isComplete}/>{props.name}
        <a href="#" onClick={handleRemoval}>X</a>
    </li>
)}