let container = document.querySelector('.container')
let img = document.querySelector('img')

let h1 = document.querySelector('h1')

//appending when we have one image source is available

// for(let i=2;i<100;i++){
//   let c = img.cloneNode()
//   c.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//  container.append(c);
// }

//when no source is availabkle
//use document.createElement() 

// const b = document.createElement('Aniket')  //<Aniket>...</Aniket> --> Inline element
// h1.append(b)
// b.innerText = 'Hello ANIKET'

// const para = document.createElement('p')
// container.append(para)
// para.innerText='Hello'


// const body = document.querySelector('body')
// const New = document.createElement('img')
// body.append(img)

// for(let i = 0; i<100; i++){
//   let c = img.cloneNode()
//   c.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   body.append(c)
// }

///gvhvcjhdvjhdv sjdbvjd vjsavkcjsa n,

for(let i = 1; i<100; i++){
  const div = document.createElement('div')
div.classList.add('img-container')


const newImage = document.createElement('img')
newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}
.png`

const para = document.createElement('p')
para.innerText = i

div.append(newImage,para)
container.append(div)
}

// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML


