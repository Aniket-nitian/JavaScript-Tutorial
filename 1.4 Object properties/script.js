const user ={
  Name: 'Aniket',  //Key-value pair
  age: 21,
  Status: 'Student',
  'last-name': 'chauhan',
  address: {
    city: 'Muz',
    pin: 842002
  }
}


console.log(delete user.Status)  //true
console.log(user)

Object.seal(user)  //now can't delete ant key-value apir
console.log(delete user.Name)  //false

Object.freeze(user)

console.log('age' in user)