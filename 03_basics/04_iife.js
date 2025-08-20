//IIFE stands for immediately invoked function expression
//1-we use iife to execute the function instantly as we use intergrate databases into our file
//we use iife functions to quicky invoke databases
//2 - we protect or funtion being disturbed or polluted by global scope variable 



function chai(){
    console.log("first IIFE Program");//a normal function
}
chai();


(function chaiCode(){//    unnamed IIFE
    console.log("Database Connected ")
})(); //this is an iife function 

(function userInput(username){   // named IIFE
        console.log(`my name is ${username}`)
})("hitesh");

//to run multiple IIFE functions you should add a semicolon at the end of the function call 
// to avoid the typerror

//arrow function type of IIFE
((myname) => {
    console.log(`Myself ${myname}`)
})("Bhavesh")

