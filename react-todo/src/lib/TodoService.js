const baseUrl = 'http://localhost:8080/todos'

export const loadTodos = async () => {
    let res = await fetch(baseUrl)
    return res.json()
}