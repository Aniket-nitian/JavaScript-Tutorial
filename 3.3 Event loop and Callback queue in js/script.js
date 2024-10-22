console.log('Hi-1')
console.log('Hi-2')

function hello(){
  console.log('hello world')
}                                 //It will directly goes to callstack but in case of setTimeout and interval...

//use event loupe website


for(let i = 0;i<5;i++){
  console.log('Hi-3')
}                      

hello()


setTimeout(function() {  //anonymous function
  console.log('Hi-4');
},0)               //this will run at last, It doesn't put in a call stack.  ,it moves to "web Apis" 1st. then come back to callback queue and then event loop (Works as a bridge) check is there any thing in callback queue if so it transferd to call back then.....

console.log('Hi-5')

setTimeout(hello,200)
