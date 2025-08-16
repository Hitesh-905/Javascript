//           ****************************************numbers********************************** */

// const score="100";
// console.log(score);
// console.log(typeof score);//string

// const newscore=Number(score);//converting string to number
// console.log(newscore);
// console.log(typeof newscore);


// const numberabc=100.2596;
// console.log(numberabc.toFixed(2));//100.26 -this will round the number to 2 decimal places


// console.log(numberabc.toPrecision(2)); //100.3 -this will throw an error 
// // toPrecision is not a method of Number object, it is a method of Number prototype

// const hundred=10000000000;
// console.log(hundred.toLocaleString('en-IN'))
// console.log(hundred.toLocaleString());



   //      ****************************************maths********************************** */

console.log(Math);//math object in javascript
console.log(Math.round(4.6)); //5 -rounds the number to the nearest integer
console.log(Math.abs(-25.6)); //25.6 -returns the absolute value of a number
console.log(Math.ceil(4.2)); //5 -rounds a number UP to the nearest integer
console.log(Math.floor(4.8)); //4 -rounds a number DOWN to the nearest integer


console.log(Math.min(1,2,5,6));  //will return the minimum value from the given numbers
console.log(Math.max(1,2,5,6));  //will return the maximum value from the given numbers

// the most important function of math object is random function
console.log(Math.random());//this will return a random value between 0 and 1 on every execution
console.log(Math.random()*10);//this will return a random value between 0 and 10 on every execution
console.log(Math.floor((Math.random()*10)+1));

const min=10;
const max=20;
console.log(Math.floor(Math.random()* (max-min+1)+min));//this will return a random value on every exectuion between 10 and 20
//this is the formula to get a random number between min and max
//Math.floor(Math.random() * (max - min + 1) + min);
