
const tinderuser= new Object();//tjis will create a singleton object using the constructor method
// console.log(tinderuser);//this will create an empty object

//we can also create an object using object literal
const instauser={
    name : "hitesh",
    age : 56,
    email: "hitesh@gmail.com",
    height : 5.9

}// this is not a singleton object but a normal object
//instauser is an object literal
//we can add properties to the object literal
// console.log(instauser);//this will create an empty object

//lets create a object within objects

const regularuser={
    email: "hitesh@google.com",
    fullname:{
        username:{
            firstName: "Hitesh",
            lastName: "Choudhary"   
        }
    }
}
//we can access the properties of an object using dot notation or bracket notation
// console.log(regularuser.email);
// console.log(regularuser["email"]);

// console.log(regularuser.fullname.username.firstName); //accessing nested object properties
// console.log(regularuser.fullname["username"]["lastName"]); //accessing nested object properties using bracket notation

//lets combine two or more objects
const obj1 ={1 : 'a' ,2 : 'b'}
const obj2 ={3 : 'a' ,4 : 'b'}

const obj3 = Object.assign({},obj1,obj2);
//const obj3 = Object.assign(obj1,obj2);//this will also combine the objects but adding 
// a extra curly braces sets the target and rest all will be the source


// console.log(obj3);

//another method of combining objects is similar like adding array that is spread function
const obj4 ={...obj1,...obj2};
// console.log(obj4);

console.log(instauser);
console.log(Object.keys(instauser));
console.log(Object.values(instauser));




