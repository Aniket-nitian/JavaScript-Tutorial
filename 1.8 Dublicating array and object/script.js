const user1 = 'Aniket'
const user2 = user1   

console.log(user1)
console.log(user2)

const even = [2,4,6,8]
const odd = even   //Address remains same

odd.push(10)

console.log(even)
console.log(odd)

const a = {
  x: 2,
  y: 3
}

const b = a //address is same

b.z = 4

console.log(a)
console.log(b)


//Using above methods you can't dublicate so....

const usera = {
  Name: 'Aniket',
  Age: 21
}

const userb = {}

Object.assign(userb,usera)  //usera property will also assingn in userb 
//with different addresses.

userb.pata = 'Muzaffarpur'

console.log(usera)
console.log(userb)

const userX = {
  Name: 'Aniket',
  Age: 21
}

const userY = {...userX}  //spread operator

const num1 = [1,4,11,7,3]
const num2 = [11,54,61,74,3]

const joined = [...num1,...num2]
console.log(joined)

userY.pata = 'manipur'

console.log(userX)
console.log(userY)

 