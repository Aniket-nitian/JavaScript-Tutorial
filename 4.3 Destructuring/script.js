const colors = ['Yellow','red','orange','white']

//Normal way
const colorA = colors[0]
const colorB = colors[1]
const colorC = colors[2]

//destructuring methodc
const [color1] = colors
const [color2,color3,color4] = colors

const [,,color5] = colors  //orange
const {2: color6} = colors  //array is also an object so, 2nd index ka value color6 me daal do

function printColor([a,b,c]){
  console.log([a,b,c],d)
}

printColor(colors)




const user = {
  name: 'Aniket',
  age: 21,
  address: {
    city: 'Muzaffarpur',
    state: 'Bihar'
  }
}

//normally
const ageA = user.age
const nameA = user.name

//using destructuring
const {name,age} = user  //In object destructuring, Variable name always be Key(name,age)
  
const {name: userName, age: userAge} = user  //userName is new variable which will store name value
const {address: {city}} = user


function intro({age,name}){
  console.log(age,name)
}

intro(user)

