console.log(document)
console.dir(document)  //showing in a object format

// See parent and children of each element??

console.log(document.children[0])
console.dir(document.children[0])

console.log(document.children[0].children[0])
console.dir(document.body)
console.dir(document.body.children[2])

//changing heading

 //  document.body.children[0].innerHTML = 'Aniket'
 //    document.body.children[0].innerText = 'Aniket'
        

// const change = document.body.children[1]

// change.innerHTML = 'Frontent'


//**************************************************//

const images = document.getElementsByTagName('img')  //it gives a collection
console.log(images)
//console.log(images[1].src="/image/memory2.png")

const cssImage = document.getElementsByClassName('css-imag') //gives an array
console.log(cssImage)

const Id = document.getElementById('IID')
console.log(Id)

//document.querySelector('.class','#id','attribute')  --> select the 1st one
//document.querySelectorAll('any selector')  --> select all the elements


// *************** Image changing *****************

const change = document.querySelectorAll('img')

const imageChange = [
  'https://i.pinimg.com/736x/bd/2f/29/bd2f290176e4e50540600ce92a847a3b.jpg',
  'https://w0.peakpx.com/wallpaper/908/670/HD-wallpaper-dhoni-sports-uniform-cricket-ms-dhoni-mahendra-singh-dhoni-thumbnail.jpg',
  'https://www.shutterstock.com/editorial/image-editorial/MfTfA1z0OeDbA61bMjA5ODA=/ms-dhoni-india-using-wicket-keeping-gloves-440nw-10299317eg.jpg'
]

// for(let i = 0; i<change.length; i++){
//   change[i].src = imageChange[i]
// }

change.forEach((image,i) => {
  image.src = imageChange[i]
})