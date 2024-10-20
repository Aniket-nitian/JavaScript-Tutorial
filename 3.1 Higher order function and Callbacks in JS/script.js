function a (b) {
  //console.log(b);
  console.dir(b)
  
}


console.log(typeof a)
console.dir(a)

a("Hiiii")    //string as an argument

const c = {
  UserName: 'Aniket',
  Age: 21
}
console.log(typeof c)

a(c)      //Object as an argument

const d = [1,2,3,4,5]
console.log(typeof d)
 
a(d)      //array as an argument

console.log('*************************************')


function p(q){
  console.dir(q)
  q()
}       //Higher order function


function sayHi(){
  console.log('Hiiiiiii')

}

p(sayHi)      //function as an argument, CallBack function

