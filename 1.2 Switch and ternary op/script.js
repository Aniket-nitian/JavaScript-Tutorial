const grade = prompt('Enter your grade: ')
 const Grade = grade.toUpperCase()

 console.log(`Your marks is ${Grade}`)
switch(Grade){
  case 'A':
    console.log('marks > 80')
      break
    case 'B':
    console.log('marks > 70')
      break
    case 'C':
    console.log('marks > 60')
      break
    case 'D':
    console.log('marks > 50')
      break
    case 'E':
    console.log('marks > 40')
      break
    case 'F':
    console.log('Better luck next time')
      break
    default:
      console.log('Your are not a student')
}

console.log(true ? 'Aniket' : rajput)