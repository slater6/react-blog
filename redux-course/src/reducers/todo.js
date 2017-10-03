import {getTodos} from '../lib/todoServices'

export const TODO_ADD = 'TODO_ADD'
export const TODOS_LOAD = 'TODOS_LOAD'
export const CURRENT_UPDATE = 'CURRENT_UPDATE'



const initState = {
    todos:[],
    currentTodo: ''
}

export const updateCurrent = (val) => (
    {
        type:CURRENT_UPDATE,
        payload:val
    }
)
export const loadTodos = (todos) => ({
    type: TODOS_LOAD,
    payload:todos
})

export const fetchTodos = () => {
    return (dispatch) => {
        getTodos()
        .then(todos => dispatch(loadTodos(todos)))
    } 
}

export default (state = initState,action) => {

    switch(action.type){
        case TODO_ADD:
            return {...state, todos: state.todos.concat(action.payload)}
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload}
        case TODOS_LOAD:
            return {...state, todos: action.payload}
        default:
             return state;
    }
   
}