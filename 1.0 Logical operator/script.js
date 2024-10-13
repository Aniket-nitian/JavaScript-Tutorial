const userAge = 21
console.log(userAge>20)

console.log((userAge>20) && (userAge<25))

const isUseCollegeStudent = (userAge>20) && (userAge<25)

console.log(isUseCollegeStudent)

const isSchoolStudent = (userAge>5) && (userAge<18)

const isStudent = isUseCollegeStudent || isSchoolStudent

console.log(isStudent)

console.log('Hello' && console.log('hello'))