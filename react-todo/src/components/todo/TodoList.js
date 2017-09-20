import React from 'react';
import { TodoListItem} from './TodoListItem';

export const TodoList = (props) => (
    <div className="Todo-List">
        <ul>
            {props.todos.map(todo => <TodoListItem handleToggle={props.handleToggle} key={todo.id} {...todo} />)}
        </ul>
    </div>
)