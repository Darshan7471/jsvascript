// #premitive datatype

// 7 types : String, Number, Boolean, null, undefined, symbol, Bigint

const score = 100
const scoreValue = 100.3

const isLogedIn = false
const outsideTemp = null

let userEmail = undefined;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 35654654654654654654654n


// reference type

// array, Objects, Functions


const heros = ["shaktiman", "nagraj", "doga"]; // array

let myonj = {
    name: "darshan",
    age: 24,
}

const myFunction =  function(){
    console.log("helo world");

}

console.log( heros)

// **************************** merories

// stack (primitive) , Heap (Non-primitive)

let myYoutubename = "darshannikam"

let anotherName = myYoutubename

anotherName = "chai"

console.log(myYoutubename);
console.log(anotherName);

let user = {
    email: "user@gmail.com",
    upi: "yser@ybl"
}

let usertwo = user

usertwo.email = "simple@co.co"

console.log(user.email);
console.log(usertwo.email);
