//Function declaration.

//Function expression --> when a function is stored in a variable, there is no need of giving function name(anonoumous function)

//Arrow function expression(function replaced by =>)


function square(num){
    return num*num;
}

console.log(square(3))

const square1 = function(a){
  return a*a;
}

console.log(square1(2))

const add = (b) => {    //arrow function
  return b+b
}

console.log(add(8))

const sub = (a,b) => a-b                //Arrow function expression having no need of return and {}

console.log(sub(20,3))

setTimeout(()=> console.log('Hello'),2000)