//json ia a valid object in js.
//the response from the server is sent in JSON(js object notation) format

const img = document.querySelector('img');
const button = document.querySelector('button');



button.addEventListener('click',(event) => {
      fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(json => {
            img.src = json.message;
      })
      
})