import {getTodos, createTodo, updateTodo, deleteTodo} from '../lib/todoServices'
import {showMessage} from './message'

export const TODO_ADD = 'TODO_ADD'
export const TODO_REPLACE = 'TODO_REPLACE'
export const TODOS_LOAD = 'TODOS_LOAD'
export const TODOS_DELETE = 'TODOS_DELETE'
export const TODOS_ACTIVE = 'active'
export const TODOS_COMPLETED = 'completed'
export const CURRENT_UPDATE = 'CURRENT_UPDATE'

const initState = {
    todos:[],
    currentTodo: ''
}

export const updateCurrent = (val) => ({type:CURRENT_UPDATE,payload:val})
export const loadTodos = (todos) => ({type: TODOS_LOAD,payload:todos})
export const addTodo = (todo) => ({type: TODO_ADD,payload:todo})
export const replaceTodo = (todo) => ({type: TODO_REPLACE,payload:todo})
export const removeTodo = (id) => ({type: TODOS_DELETE,payload:id})

export const fetchTodos = () => {
    return (dispatch) => {
        dispatch(showMessage('Loading Todos'))
        getTodos()
        .then(todos => dispatch(loadTodos(todos)))
    } 
}

export const saveTodo = (name) => {
    return (dispatch) => {
        dispatch(showMessage('Saving Todo'))
        createTodo(name)
        .then(res => dispatch(addTodo(res))
        )
    } 
}

export const toggleTodo = (id) => {
    return (dispatch, getState) => {
        dispatch(showMessage('Updating Todo'))
        const {todos} = getState().todo
        const todo = todos.find(t => t.id === id)
        const toggled = {...todo, isComplete: !todo.isComplete}
        updateTodo(toggled)
        .then(res => dispatch(replaceTodo(res))
        )
    } 
}

export const destroyTodo = (id) => {
    return (dispatch) => {
        dispatch(showMessage('Deleting Todo'))
        deleteTodo(id)
        .then(() => dispatch(removeTodo(id))
        )
    } 
}

export const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case TODOS_ACTIVE:
            return todos.filter(todo => !todo.isComplete);
        case TODOS_COMPLETED:
            return todos.filter(todo => todo.isComplete);
        default :
            return todos
    }
}

export default (state = initState,action) => {

    switch(action.type){
        case TODO_ADD:
            return {...state, currentTodo:'', todos: state.todos.concat(action.payload)}
        case CURRENT_UPDATE:
            return {...state, currentTodo: action.payload}
        case TODOS_LOAD:
            return {...state, todos: action.payload}
        case TODO_REPLACE:
            return {...state, todos: state.todos.map( t => t.id === action.payload.id ? action.payload : t )}
        case TODOS_DELETE:
            return {...state, todos: state.todos.filter( todo => todo.id !== action.payload)}
        default:
             return state;
    }
   
}