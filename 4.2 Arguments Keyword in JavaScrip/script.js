function add(a,b){
  console.log(arguments)      //It gives an array
  return console.log(a+b);
}

add(2,5)

function sub(a,b,c,d){
  console.log(arguments[3])      //It gives an element of array
  console.log(arguments[0])
  return console.log(a-b-c-d);
}

sub(2,5,1,7)


const adddd =()=>{
  let sum = 0
  for(let i = 0;i < arguments.length;i++){
    sum += arguments[i]
  }
  return console.log(sum)
} 
adddd(12,3,1,4)    //It will give error,therfore use nums, or use function instead of anonoumous function

const addd = (...nums) => {   //This is rest parameter , it is different from spread op, it gives data in the form of an array
//Spread(Phailana), rest(Iktha)/Bachi hui values

const nums1 = [1, 2, 3, 4]

function add(a, b, c, ...nums) {  //rest parameter(always at last)
    console.log(a, b, c);
    console.log('nums:', nums);
    let sum = 0
    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
    }
    return sum
}
console.log(add(...nums1))



  let sum = 0
  for(let i = 0;i < nums.length;i++){
    sum += nums[i]
  }
  return console.log(sum)
} 
addd(12,3,1,4)

//number*undefined == NaN