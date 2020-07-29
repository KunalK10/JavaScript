let userEmail = 'lco123'
let password = 'kunal1234'

let userChecker = function (myString) {
    if ((myString.includes(123)) && (myString.length > 6)) {
        return true
    }else {
        return false
    }
}

let passChecker = function(myPass) {
    if ((myPass.includes(123)) && (myPass.length > 8)) {
        return true;
    }else {
        return false;
    }
}

console.log(passChecker('kunal'));