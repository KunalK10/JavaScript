let myTodos = {
    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function(num) {
        this.meetings = this.meetings + num
    },

    summary: function () {
        return `You have ${this.meetings} meeting Today`
    }
}



myTodos.addMeeting(4)
console.log(myTodos.summary())



