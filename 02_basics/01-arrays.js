// array

const myArray = [0, 1,2,3,4,5]

const myHeros = ["shaktiman", "Gangadhar"]

const myArr2 = new Array (1,2,3,4)
console.log(myArray[0])

// Array Methods

// myArray.push(6)
// myArray.pop()

// myArray.unshift(9)
// myArray.shift()

// console.log(myArray.indexOf(3));

// const newArray = myArray.join();

// console.log(myArray);
// console.log(typeof newArray);


// slice , splice

console.log("A", myArray);

const mynewar1 = myArray.slice(1, 3)

console.log(mynewar1);
console.log("B", myArray);

const mynewar2 = myArray.splice(1, 3)
console.log("c", myArray);
console.log(mynewar2);

