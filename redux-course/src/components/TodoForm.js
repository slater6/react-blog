import React from 'react'

export const TodoForm = (props) => {
    const {currentTodo, changeCurrent} = props;
    
    const handleInputChange = (evt) => {
        const val = evt.target.value;
        changeCurrent(val);
    }

    return (
        <form action="">
            <input type="text" value={currentTodo} onChange={handleInputChange}/>
        </form>
    )
} 