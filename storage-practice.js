const todos = [
    {
        id: 1,
        title: "Wash the car",
        desc: "Today you've to wash the car",
        done: true
    },
    {
        id: 2,
        title: "Make meal",
        desc: "Afternoon you've to make meal",
        done: true
    },
    {
        id: 3,
        title: "Dinner with parent",
        desc: "Night you've to dinner",
        done: false
    },
    {
        id: 4,
        title: "Ride the car with your girlfriend",
        desc: "Today you've to ride the car with your girlfriend",
        done: false
    }
]

const saveTodos = (todos) => {
    const data = todos.filter(todo => todo.done === false)
    localStorage.setItem('Todo', JSON.stringify(data))
}

const loadTodos = () => {
    const data = localStorage.getItem('Todo')
    return data ? JSON.parse(data) : []
}