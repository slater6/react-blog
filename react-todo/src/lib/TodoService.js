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