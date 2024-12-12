const green = document.querySelector('.green')
const pink = document.querySelector('.pink')
const blue = document.querySelector('.blue')


//Event bubbling

// green.addEventListener('click',()=>{   //if we touch any one among above it will work, to stop it we use.....//it goes till windows(child-parent-grandparent-document-windows)
//   console.log('grenn event listner')
// })

//reverse is -- using true

// green.addEventListener('click',()=>{   //if we touch any one among above it will work, to stop it we use.....//it goes till windows(windows-document-grand parent-parent-child)
//   console.log('grenn event listner')
// },{capture: true})

//to stop event

// green.addEventListener('click',()=>{   //if we touch any one among above it will work, to stop it we use.....//it goes till windows(windows-document-grand parent-parent-child)
//   console.log('grenn event listner')
// },{once: true})


//event capturing(to stop bubbling)

green.addEventListener('click',(e)=>{ 
  e.stopPropagation()
  console.log('grenn event listner')
})









