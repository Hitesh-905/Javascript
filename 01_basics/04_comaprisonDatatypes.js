//comparison of datatypes in javascript

//the main problems lie when the datatypes are not of same type 
//example comparison of string datatype with number datatype

// console.log("1" == 1); //true, because == operator does type coercion
//javascript automatically converts the string "1" to number 1 before comparison

// console.log("1" === 1); //false, because === operator does not do type coercion
//it checks both value and type, here "1" is string and 1 is number


//another example is of comparing null andd other datatypes
console.log(null >0);
console.log(null < 0);
console.log(null >= 0);
console.log(null == 0);//false 

// the reason behind this is that eqality check and comparison ceheck works differntly in javascript
// null is converted into a number 0 when compared with a number 

//whereas undefined always give output to false comparing it with any comparison sign
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0); //false
console.log(undefined == 0); //false

//undefined is not equal to null, they are different datatypes
console.log(undefined == null); //true, because both are falsy values
console.log(undefined === null); //false, because they are of different types

//to avoid such issues, it is recommended to use strict equality (===) and strict inequality (!==) operators in javascript


