const user = {
  firstName: 'Anurag',
  lastName: 'Singh',
  age: 25,
  getUserAge: function(){
    return new Date().getFullYear() - user.age
  }
}

console.log(user.getUserAge())


//user blue print
function createUser(firstName,lastName,age){
  const user = {
    firstName: firstName,
  lastName: lastName,
  age: age,
  }

  return user
}


const user1 = createUser("Aniket","Rajput",21)
const user2 = createUser('Rahul','kumar',20)
console.log(user1)
console.log(user2)

//problem is it always take new memory. to over come use constructor
