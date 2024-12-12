
const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const input = document.querySelector('input')

let count = 0

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})

// for(let i=0;i<100;i++){
//   addCardBtn.click()
// }

// const interval = setInterval(()=>{
//   if(count>=10){
//     clearInterval(interval)
//   }
//   addCardBtn.click()
// },100)

setTimeout(()=>{
  input.focus()
},2000)

setTimeout(()=>{
  input.blur()
},2000)