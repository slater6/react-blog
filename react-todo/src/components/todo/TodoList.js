import React from 'react';
import { TodoListItem} from './TodoListItem';

export const TodoList = (props) => (
    <div className="Todo-List">
        <ul>
            {props.todos.map(todo => <TodoListItem handleToggle={props.handleToggle} handleTodoRemoval={props.handleTodoRemoval} key={todo.id} {...todo} />)}
        </ul>
        <button onClick={props.handleMultipleTodoRemoval}>Archive Todos</button>
    </div>
)