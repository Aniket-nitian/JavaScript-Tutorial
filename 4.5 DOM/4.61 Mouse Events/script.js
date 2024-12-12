
const h1 = document.querySelector('h1')
const card = document.querySelector('.card')
const container = document.querySelector('.container')

let count = 0

// card.addEventListener('click', () => {
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('dblclick', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('mousedown', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('mouseup', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('mouseenter', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('mouseleave', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('mousemove', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('mouseout', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('mouseover', (e) => {  //used when child is presnt 
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('wheel', (e) => {  //using 2 fingers
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('scroll', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// document.addEventListener('scroll', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// event other than mouse event


// card.addEventListener('touchstart', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('touchend', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


// card.addEventListener('touchmove', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('drag', (e) => {   //use attribute draggable="true"
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('pointermove', (e) => {   //alternative of mousemove and touchmove, it works in both phone and desktop
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })

// card.addEventListener('pointerenter', (e) => {
//     console.log(e)
//     const newCard = document.createElement('div')
//     newCard.classList.add('card')
//     newCard.innerText = count++
//     container.append(newCard)
// })


card.addEventListener('pointerleave', (e) => {
    console.log(e)
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count++
    container.append(newCard)
})