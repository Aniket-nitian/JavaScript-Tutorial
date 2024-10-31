const even = [2,4,6,8,10]

for(let i = 0;i<even.length;i++){
  console.log(even[i])
}

for(x of even){
  console.log(x)
}

console.log("***************")

const fruits = ['Apple','Orange','Mango']

for(const fruit of fruits){  //variable is not compulsary
  console.log(fruit)
}

console.log('****************')
//for in used in object
const person = {
  name:'Aniket',
  lastName:'Chauhan',
  age:21,
}

for(key in person){
console.log(`${key}: ${person[key]}`)
}

const personKeys = Object.keys(person)
const personValues = Object.values(person)

for(const key of personKeys){
  console.log(person[key])
}


