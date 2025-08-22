

function sayMyname() {
console.log("d")
console.log("d")
console.log("d")
console.log("d")
console.log("d")
console.log("d")
}

// sayMyname()

// function addTwoNumbers(number1, number2) {
//   console.log(number1 + number2)
// }

function addTwoNumbers(number1, number2) {
    // let resule = number1 + number2
    // return resule
    return number1 + number2
}

const resule = addTwoNumbers(3, 5)

// console.log("result:", resule);

// function loginUserMsg(username) {
//     if(username === undefined) {
//       console.log("pls enter username")
//       return
//     }
//    return   `${username} just logedin`
// }

function loginUserMsg(username = "darsh") {
    if(!username) {
      console.log("pls enter username")
      return
    }
   return   `${username} just logedin`
}

console.log(loginUserMsg("sun"))
