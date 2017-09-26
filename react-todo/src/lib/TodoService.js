const baseUrl = 'http://localhost:8080/todos'

export const loadTodos = async () => {
    let res = await fetch(baseUrl)
    return res.json()
}

export const createTodo = async (todo) => {
    let res = await fetch(baseUrl,{
        method : 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    return await res.json()
}

export const saveTodo = async (todo) => {
    let res = await fetch(`${baseUrl}/${todo.id}`,{
        method : 'PUT',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    return await res.json()
}

export const deleteTodo = async (id) => {
    return await fetch(`${baseUrl}/${id}`,{
        method : 'DELETE',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
}