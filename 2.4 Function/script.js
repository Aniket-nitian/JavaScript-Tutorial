// console.log('hi,')
// console.log("I'm Aniket chauhan.")
// console.log('I am learning web Development')

function introduceMe(name) {
  console.log('hi,')
  console.log("I'm Aniket chauhan.")
  console.log('I am learning web Development !!!!')
}                         //function definition

//result of the above fxn will ne undefined, because no return type

console.log(introduceMe())    //function call

let user = prompt('Enter  your name')

function newUser(users = 'Aniket chauhan'){  //if no input then default Aniket chauhan
  console.log('hi,')
  console.log(`I'm ${users || 'Aniket Chauhan'}.`)
  console.log('I am learning web Development !!!!')
}

console.log(newUser(user))     //you can take as much Argument as you want


