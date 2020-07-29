const myTodos = ['Buy Bread', 'Go to Gym', 'Record Video']

// console.log(myTodos.indexOf('Buy Bread'));

const newTodos = [{
    title: 'Buy Bread',
    isDone: false
}, {
    title: 'Go to Gym',
    isDone: false
}, {
    title: 'Record Video',
    isDone: true
}]

// const index = newTodos.findIndex(function(todo, index){
//     console.log(todo);
//     return todo.title === 'Go to Gym'
// })

// console.log(index);

//Method 1
// const findTodo = function(myTodo, title) {
//     const index = myTodo.findIndex(function(todo, index){
//         return todo.title.toLowerCase() === title.toLowerCase()
//     })
//     return myTodo[index]
// }

// let printMe = findTodo(newTodos, 'Go to Gym')

// console.log(printMe);

const findTodo = function(myTodo, title){
    const titleReturned = myTodo.find(function(todo, index){
        return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturned
}

let printMe = findTodo(newTodos, 'Go to Gym')
console.log(printMe);
