const userInput = document.querySelector('#username')
const h1 = document.querySelector('h1')
const form = document.querySelector('form')

const para = document.createElement('p')
h1.appendChild(para)


// userInput.addEventListener('input',()=>{
//   console.log('input fired')
// })


// // saving data

// userInput.addEventListener('input',(aniket)=>{  //use e/evt
//   console.log(aniket);
//   console.log('input fired')
// })

//showing using properties

// userInput.addEventListener('input',(e)=>{  //use e/evt
//   console.log(e.target.value);
//   para.innerText = e.target.value;
// })



// userInput.addEventListener('change',(e)=>{   //focus(type)+blur(click outside) concept. //type and click outside
//  result = e.target.value
//  para.innerText = result
// })

// userInput.addEventListener('focus',(e)=>{   
//   console.log(e.type)
//   result = e.target.value
//   //para.innerText = result
//  })

//  userInput.addEventListener('blur',(e)=>{   
//   result = e.target.value
//   para.innerText = result
//  })

form.addEventListener('submitt',(e)=>{   //form event    //use preserve log from setting
  e.preventDefault()    //default property of form will not activate.it will not subbmit
  console.log(e.target.value)
})