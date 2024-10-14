const userName = prompt('Enter your Name') || 'Aniket chauhan'
const userAge = parseInt(prompt('Enter your Age')) || 21
const gender = prompt('Enter your gender M/F')
const Gender = gender.toUpperCase()

console.log(`Name: ${userName}`)
console.log(`Age: ${userAge}`)
console.log(`Gender: ${Gender}`)

if(Gender==='M')
  console.log(`${userName} is a male`)

if(Gender==='F')
  console.log(`${userName} is a female`)

if(true)
  console.log(`${userName} is working professional`)


if(userAge>20){
  console.log(`${userName} is a College Student`)
  console.log('And learning JS')
}

