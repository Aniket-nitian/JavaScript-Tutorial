let x = 'i am Aniket'

let a = x.includes('i am')
console.log(a) //true

let b = x.indexOf('m')
console.log(b) //4

let y = "hello world"

let c = y.replace('hello','Intelligentr')
console.log(c) //Intelligent world

let d = y.replaceAll('o','O')
console.log(d) //hellO wOrld

console.log(y.concat(' hello')) //hello world hello

const lastFourdigits = '0960'
console.log(lastFourdigits.padStart(16,'x'))

console.log(x[3])
let e = x.charAt(3)
console.log(e)

let f = x.split()
console.log(f) //['i am Aniket']

let g = x.split(' ')
console.log(g) //['i', 'am', 'Aniket']


const templateString = `lat four digits of my a/c is ${lastFourdigits}`
console.log(templateString)