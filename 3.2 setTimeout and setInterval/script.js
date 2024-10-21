setTimeout(`console.log("Aniket")`,2000)     //message + time(in milliseconds)

//It will provide a id(return value)

clearTimeout(3)

//SetTimeout is a asyncronous

const timer1 = setTimeout(`console.log("H-1")`,1000)
const timer2 = setTimeout(`console.log("H-2")`,2000)
const timer3 = setTimeout(`console.log("H-3")`,3000)
const timer4 = setTimeout(`console.log("H-4")`)    //default time = 0 sec     
console.log('This will always print 1st')

clearTimeout(timer2)


//setTimeout() as a higher order function

setTimeout(a,4000)

function a() {
  //console.log(arguments)
  console.log("Chauahn")
}

const interval1 = setInterval(`console.log("H-1")`,1000)  //every sec it will print

clearInterval(interval1)

setTimeout(function(){
  console.log("Rajput")
})

