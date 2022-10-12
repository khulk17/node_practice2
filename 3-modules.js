//Modules

const names=require('./4-names')
const functions=require('./5-utils')
console.log(names)
functions.sayHi(names.john)
functions.sayName(names.john)
functions.sayHi(names.peter)
functions.sayName(names.peter)
functions.sayHi("Susan")
