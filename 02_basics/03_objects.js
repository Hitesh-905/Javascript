//the most important thing to remember is that objects are mutable`
// the most importamt thing to master in javascript is objects and events

// we can create an object by literal or constructor method

//single object literal is a collection of key value pairs that 
Object.create// constructor method isko hi bolte hain aur isi ke andar singleton banta hai
const mysymbol=Symbol("key1");
// console.log(jsUser[mysymbol]);//we can only acess symbol using bracket notation

const jsUser ={
    name:"hitesh",
    "full name": "Hitesh Choudhary",
    age: 30,
    [mysymbol]:"my symbol value", // we can use symbols as keys in objects
    isloggedIn: true,
    cityName: "Badlapur",
    email: "hitesh@example.com"
}
// we can access the properties of an object using dot notation or bracket notation
// console.log(jsUser.name);//we can acess through dot notation but it is not recommended as a good pratice 
// console.log(jsUser["age"])
//console.log(jsUser.fullname);//it will show undefined as it is not a good pratice to use space in key names

//how to use symbol in objects

//updating an object 
jsUser.age = 31; //updating the age property
jsUser["cityName"] = "Mumbai"; //updating the cityName property
// console.log(jsUser);

//freezing an object information so no one can upddate it or change it
//Object.freeze(jsUser); //this will make the object immutable
jsUser.age = 32; //this will not work as the object is frozen
// console.log(jsUser);

//we can add function in objects as well 
//i javascript functions are first class citizens
//we can treat functions as values and assign them to variables or object properties

jsUser.greetings=function(){
    console.log("hello world from greetimg function");

}
jsUser.greetings2=function(){
    console.log(`hello world ${this.name} from greeting2 function`);
}
console.log(jsUser.greetings());
console.log(jsUser.greetings2());
