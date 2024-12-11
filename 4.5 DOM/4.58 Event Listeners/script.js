function sayHi(){
  console.log('hii');
}

const h1 = document.querySelector('h1')

//h1.onclick = sayHi  //onclick always wants a function //1st method

h1.addEventListener('click',sayHi)  //event + function required// 2nd method

h1.addEventListener('click',() => {
  console.log('Good morning')
})

const card = document.querySelector('.card')
const add_card = document.querySelector('.add-card')
const container = document.querySelector('.container')


let count = 1
card.addEventListener('click',()=>{
  let newCard = document.createElement('div')
  newCard.classList.add('card')
  container.append(newCard)
  newCard.innerText = count++

})