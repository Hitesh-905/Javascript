//datatypes conversions in javascript

let score=45;
// console.log(typeof score); //number

let score1="45";
// console.log(typeof score1); //string

let valueInNumber=Number(score1);
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //45



let matchpoint="32abc";
// console.log("typeof matchpoint: ", typeof matchpoint); //string

let convertingmatchpoint=Number(matchpoint)
// console.log(typeof convertingmatchpoint); //number
// console.log(convertingmatchpoint); //NaN (Not a Number, because the string cannot be converted to a number)


/*
all conversions in javascript are done using the Number() function
"33"  ->33 string to number
"33abc" -> NaN (Not a Number, because the string contains non-numeric characters)
true -> 1 (boolean to number, true is converted to 1)
false -> 0 (boolean to number, false is converted to 0)
null -> 0 (null is converted to 0)
undefined -> NaN (undefined cannot be converted to a number)
*/


//coverting datatypes to boolean
 
let loggedin="1";
// console.log(typeof loggedin)
let checkloggedin=Boolean(loggedin);
// console.log(typeof checkloggedin);
// console.log(checkloggedin)

/*
notes
"" -> false (empty string is falsy)
"hitesh" -> true (non-empty string is truthy)
0 -> false (zero is falsy)
*/

//           ******************************************************Operations***********************************************************

// //operations in javasscript
// aritmetic operations
// let a=10;
// let b=20;

// let sum=a+b;
// // console.log("sum: ", sum); //30      
