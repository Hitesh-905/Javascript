// strings

const stringname="hello world";
const repocount =2;

// console.log(`the name of my string is ${stringname} and the repo count is ${repocount}`); //template literals

const newname =new String("hello world");//creating a string object 

// console.log(newname.toUpperCase()); //HELLO WORLD

// console.log(newname.charAt(6));
console.log(newname.indexOf("l"));//returns the index of the first occurrence of the character 'l' in the string)
// console.log(newname.__proto__);//this will return the prototype of the string object

//lets learn about more methods in string object such as slice , substring , trim , replace
const newstring= newname.substring(0,5); //substring method extracts characters from index 0 to index 5 (not including 5)
// console.log(newstring);

console.log(newname.slice(-9,4));//from the end of the string, it will extract characters from index -9 to index 4 (not including 4)

const nameofuser="   hiteshChoudhary  ";
console.log(nameofuser);
console.log(nameofuser.trim());//trims the white spaces from both the ends i,it only works for white spaces not or other characters

const url="https://hiteshchoudhary/courses%20javascript.com";
console.log(url.replace("%20", "-")); //replaces the first occurrence of %20 with a '-'

//another exapme of string functions is split which splits the string into an array of substrings based on 
// specific seperator or character
const sentence="hello channel welcome to my guys";
console.log(sentence.split(" ")); //splits the string into an array of substrings based on space character

