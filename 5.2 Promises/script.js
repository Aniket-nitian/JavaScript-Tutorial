const resolveBtn = document.querySelector('#resolve-button')
const rejectBtn = document.querySelector('#reject-btn')

const p = new Promise((resolve,reject)=>{
  // resolve('Aniket')
  // reject('Promise rejected')

  // setTimeout(()=>{
  //   resolve({name: "Aniket"})
  // },4000)

  resolveBtn.addEventListener('click',()=>{
resolve('Promised resolved')
  })

  rejectBtn.addEventListener('click',()=>{
reject('Promised Rejected')
  })
})

//there are 2 methods of promise
//if promisee fullfilled then then is called otherwise catch is called
p.then((data)=>{
  console.log(data)
}).catch((error)=>{
  console.log(error)
})