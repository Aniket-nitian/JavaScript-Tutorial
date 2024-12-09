document.querySelector('h1')
document.querySelector('h1').style  // gives a collection of styles of JS


document.querySelector('h1').style.color = 'hotpink'
//document.querySelector('h1').style.backgroundColor='green'

const allAnchor = document.querySelectorAll('a')

for(let i = 0; i< allAnchor.length; i++){
  allAnchor[i].style.color = 'red'
}

//or
//using let...of...

for(let all of allAnchor){
  all.style.textDecoration = 'none '
}

//or//using cssText

for(let all of allAnchor){
  all.style.cssText = `
color: red;
font-size: 18px;
font-family: cursive;
`}

//Adding snd removing class in js

document.querySelector('h2').classList.add('test')
document.querySelector('h2').classList.remove('test')

document.querySelector('h2').classList.toggle('test')  //if it has class then remove it otherwise add it

for(let all of allAnchor){
  all.style.textDecoration = 'none '
  all.classList.toggle('Aniket')
}
