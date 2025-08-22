const { use } = require("react")


function sayMyname() {
// console.log("d")
// console.log("d")
// console.log("d")
// console.log("d")
// console.log("d")
// console.log("d")
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

// console.log(loginUserMsg("sun"))


function calculateCartPrice(val1, val2,...num1) {
   return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "darshan",
    price: 199
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleobject(user)

handleobject({
    username: "same",
    price: 399
})

const mynewarr = [200,400,100,600]

function retyurnsecvalue(getarr){
  return getarr[1]
}

// console.log(retyurnsecvalue(mynewarr));
console.log(retyurnsecvalue([400,500,600,700]));
