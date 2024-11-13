console.log(window)
window.name // '' by default empty string
console.log(window.location)   //It give URL and some properties
console.log(location)

//console.log(location.reload())    
//infinite reload

setTimeout(() => {
  location.reload()
},5000);        //reload after 5sec

console.log(location.href)

// setTimeout(()=>{
//   location.href = 'https://www.google.com/'
// },5000)

console.log(window.history)  //length(3/4/5...), 

// setTimeout(()=>{
//   history.back()
// },3000)

//history.back()
//history.forward()
//history.go(-1/1/-5) --> -5 means go back 5 times

console.log(innerHeight)
console.log(innerWidth)
console.log(outerHeight)

console.log(open('URL'))
console.log(open('URL','Name','resizable'))  //now window name of the given URL become Name instead of ''

console.log(close())

//console.log(resize(600,200))
console.log(moveTo(100,0))


