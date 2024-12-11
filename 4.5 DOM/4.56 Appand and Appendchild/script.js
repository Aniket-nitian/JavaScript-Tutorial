
const h1 = document.querySelector('h1')
const container = document.querySelector(".container")
const card = document.querySelector('.card')
   
// container.appendChild(h1)   --> this is cut and paste
// container.appendChild(h1.cloneNode(true)) --> this is copy and paste/ true is used only for copying containt of the tag as well, if u only want to copy taga nd attribute don't apply true

for (let i = 2; i <=100; i++) {
    const newCard = card.cloneNode()
    newCard.innerText = i
    container.append(newCard)
}


//append can append string as well but appendchild will not. and using appen we can append multiple element at atime ('x','y',5, ...)
//If you want to do with the help of appendChild
// cont newText = document.createTextnode('hello Aniket)
//container.appendChild(newtext)