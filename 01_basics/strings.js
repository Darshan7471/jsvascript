const name = "darshan"
const repoCOunt = 10

// console.log(name + repoCOunt + "value");

console.log(`Hellow my name is ${name} and my repo count is ${repoCOunt}`)

const gameName = new String ('darshan-nikam')

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const Newstring  = gameName.substring(0, 4)
console.log(Newstring);

const anotherString = gameName.slice(-1, 4)
console.log(anotherString);


const newStringone = "   darshan    "
console.log(newStringone);
console.log(newStringone.trim());

const url = "https://darshan.com/darshan%20"



console.log(url.replace('%20', '-'));
console.log(url.includes('darshan'))

console.log(gameName.split('-'))


// examples

//   const limitedOffer = 'limied offer '
//   document.body.innerHTML = limitedOffer.blink();

//   const boldTXT = "shaky"
//   document.body.innerHTML = boldTXT.bold();


//   console.log(`remdmi has ${limitedOffer} so please take adnvantage of it's ${boldTXT} feature`);

//   document.body.innerHTML = limitedOffer.blink() + boldTXT.bold();
  

//   const username = "Darshan"

//   console.log(username.substring(0, 4))


//   const firstName = "omkar"
//   const lastName = "khan"

//   console.log(firstName + lastName)

//   console.log(` my name is ${firstName} and my last name is ${lastName.substring(0, 2)}`);


//   const refLink = "MDN Docs"

//   document.body.innerHTML = refLink.link('https://developer.mozilla.org/')


//   const player = "darshan"

//   console.log(player.toUpperCase().substring(0, 4))


  const text = "hello world";
  const result = text.match(/world/);


  console.log(result);

    const text1 = "hello1 hello2 hello3";
    const result1 = text1.match(/hello\d/g);

    console.log(result1)
  