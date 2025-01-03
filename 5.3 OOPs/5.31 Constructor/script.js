// function getBirthYear () {
//   return new Date().getFullYear() - this.age //this keyword always pount it current object
//   //alternate of user.age
// }

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getBirthYea: createUser.commonMethods.getBirthYea
  }
  return user
}

//to reduce Encapsulation.
createUser.commonMethods = {
  getBirthYear(){
    return new Date().getFullYear() - this.age
  },
}


const user1 = createUser('Aman', 'Mishra', 32)
const user2 = createUser('Anurag', 'Singh', 72)

//In above case we need to make an object first, if we dont want to do that use this and new keyword.

function userCreation(firstName,lastName,age){
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

const User = new userCreation('Aniket','chauhan',21)