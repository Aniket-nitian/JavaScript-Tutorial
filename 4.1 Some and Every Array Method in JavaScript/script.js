//some method, if any condition is true it will always give true vale as output

const digit = [1,3,2,6,8,12,56]

digit.some((num) => {
  console.log(num)
})    //it only give true/false, if return condition is fasle it give false or any return condition is ntrue it will give true, if its 1st condition is satisfied it will stop iteration and return the value

const some = digit.some((num) => {
  console.log(num)
  return num > 5
})  //here 1,3,2 is less than 5 but when 6 give the condition get satisfied so iteration stop at 6.

console.log(some)

digit.some((i,num,array) => {
  console.log(i,num,array)
})

// check where the given array is all even element or not

const even = [2,4,6,1,8,10,22]

const z = even.some((a) => {
  console.log(a)
  return a % 2 !==0
})

console.log(z)


//Evey method, if any condition is false it will always give false value as output


const y = even.every((a) => {
  console.log(a)
  return a % 2 !==0
})

console.log(y)

if(y == false){
  console.log('given arry is not even')
}