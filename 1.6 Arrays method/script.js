const even = [2,4,6,8]

console.log(even.pop())   //pop()
console.log(even)

console.log(even.push(10))    //push()
console.log(even)

console.log(even.shift())   //shift()
console.log(even)

console.log(even.unshift(2))   //unshift()
console.log(even)

const odd = [1,3,5,7]

const newArray = even.concat(odd)
console.log(newArray)   //concat()
console.log(even)

console.log(even.indexOf(6))    //indexOf()
console.log(even.indexOf(15))

console.log(even.includes(15))   //includes()

console.log(even.reverse())   //reverse()

const animal = ['cat','elephant','lion','dog']

console.log(animal.sort())  //sort()

console.log(animal.slice(2))   //slice()
console.log(animal.slice(1,3))  //1st index se (3-1)

console.log(even.splice(2,1))


 