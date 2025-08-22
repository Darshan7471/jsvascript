// singleton

// object literals

const mysym = Symbol("keys")

const jsUser = {
    name: "darshan",
    age: 24,
    [mysym]: "mykey1",
    location: "jaipur",
    email: "darshan@win.com",
    isLogedIn: false,
    lastLoinDays: ["monday", "sunday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mysym])

jsUser.email = "darshan@google.com"
// Object.freeze(jsUser)
jsUser.email = "darshan@googlems.com"

console.log(jsUser);


jsUser.greetings = function() {
    console.log("Hello Js user")
}

jsUser.greetings2 = function() {
    console.log(`Hello Js user, ${this.name}`)
}

console.log(jsUser.greetings());
console.log(jsUser.greetings2());