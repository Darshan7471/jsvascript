const mrvalHeros = ["thos", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// mrvalHeros.push(dc)

// console.log(mrvalHeros);
// console.log(mrvalHeros[3][1]);

// mrvalHeros.concat(dc);
// const allHeros = mrvalHeros.concat(dc);
// console.log(allHeros);

// spread operator

const all_newHeros = [...mrvalHeros,...dc]

// console.log(all_newHeros)

const another_array = [1,2,3,[4,5,6], 7, [6,7, [4,5]]]

const realaArrray = another_array.flat(Infinity)
console.log(realaArrray)

console.log(Array.isArray("darshan"));
console.log(Array.from("darshan"));
console.log(Array.from({name: "darshan"})); // intersting

let score1 = 100
let score2 = 200
let score3 = 300


console.log(Array.of(score1, score2, score3));

