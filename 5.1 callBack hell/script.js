//call back is nested


//function, fetching user and its post.
function makeHttpRequesr(method,url,callback){
  const xhr = new XMLHttpRequest()
xhr.responseType = 'json'
xhr.addEventListener('load', () => {
  callback(xhr.response)
})

xhr.open(method,url)
xhr.send()
}


//function call, using nested callBack
makeHttpRequesr('GET', 'https://dummyjson.com/users',(Userdata)=>{console.log(Userdata);
          makeHttpRequesr('GET', `https://dummyjson.com/posts/user/${data.users[1].id}`,(Postdata)=>{console.log(Postdata);
  })
})