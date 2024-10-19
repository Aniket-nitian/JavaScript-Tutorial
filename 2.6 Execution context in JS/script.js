debugger

sayHi()  //We can call it before declaration because at memory creation it does not declare undefined, it declare the whole code

const userName = "Aniket"
const userAge = 21

function sayHi(){
  const a = 14
  const b = 12
  console.log(a,b)
  add(7,9)
}

function add(a,b){
  return a+b
}

