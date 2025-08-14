"use strict"; //this allows the engine to treat the javascript code as newer version

//nowdays writing javascript code with "use strict" is not mandatory
// as most of the platform and engines support the latest version of javascript

/*
console.log("hitesh") console.log("virat")
 this will throw an error as the code is not properly formated
you can use semicolon at the end of each line but it is not mandatory in javascript
*/

//datatypes in javascript
//javascript has dynamic typing, meaning you can change the type of a variable at runtime
//there are 7 primitive datatypes in javascript

let name = "Hitesh"; //string
let age = 30; //number
let isMarried = false; //boolean
let salary = null; //null
let address; //undefined
let bigIntValue = BigInt(12345678901234567890); //bigint
//bigint is used for large integers
let symbolValue = Symbol("unique"); //symbol
//symbol is used to create unique identifiers
//identifiers are used to create unique keys for objects
//we use symbols mostlly while working in react to check which component is more unique than other components


console.log(typeof null); //object (this is a bug in javascript, null is not an object)
//why null is an object?
//because in the early days of javascript, null was represented as an object in memory
//this is a historical bug and it is not going to be fixed

console.log(typeof undefined);//undefined
//undefined is a type that indicates a variable has not been assigned a value