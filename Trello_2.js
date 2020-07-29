let myTodo = {
    day: 'Monday',
    meeting: 0,
    meetDone: 0, 
}

let addMeeting = function (todo, meet=0) {
    todo.meeting = todo.meeting + meet
    return `You have ${todo.meeting} left !`    

}

console.log(addMeeting(todo, 4))

