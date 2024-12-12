
const addCardBtn = document.querySelector('.card')
const container = document.querySelector('.container')
const cardList = document.querySelector('.card')

let count = 1

addCardBtn.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++

    // newCard.addEventListener('click',()=>{
    //   newCard.remove()
    // })

    container.append(newCard)
})

container.addEventListener('click',(e)=>{
  if(e.target!== container){
    e.target.remove()
  }

})

