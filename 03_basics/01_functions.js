//functions in javascript 


// function addtwoNumbers (number1,number2){
//        console.log(number1 + number2)
// }
// const result = addtwoNumbers(4,5);
// console.log("Result : ",result);
//it will not return the value 

// function addtwoNumbers (number1,number2){
//         return number1 + number2 ;
// }
// const result = addtwoNumbers(4,5);
// console.log("Result : ",result);

//lets write a logic of adding number of items to an shopping cart
//we will face issues if we add items more than one as we have passed only one arguement
/*  
function calculateCartValue(num1){
        return num1;
}
console.log(calculateCartValue(45,56));

    */


function calculateCartValue(...num){
    return num;
}
// console.log(calculateCartValue(45,56));

const handleObj={
    username : "hitesh",
    price: 45
}
function objectprinting(anyobject){
        return anyobject
}
// console.log(objectprinting(handleObj));

//passing an array through function
// const myarray = [45,65,78];
function newarray(anyarray){
    return anyarray[1];
}
// console.log(newarray(myarray));

console.log(newarray([45,69]));
