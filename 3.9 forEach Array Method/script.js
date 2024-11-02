const even = [2,4,6,8,10,12]

for(const fruit of even){
  console.log(fruit)
}

even.forEach(function(x){
  console.log(x)
})

let fruits = ['Apple','orange','Mango']

fruits.forEach((x) =>{
  console.log(x.toUpperCase())
  return x.toUpperCase()
})        //it never return anything only return undefined(in case of .map(),it return)

console.log('**********************')

const name = ['Aniket','Sahil','utkarsh']

function abc(z){
  console.log(z)
}

name.forEach(abc)