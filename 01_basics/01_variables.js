//let var aur const ki kahani

const accountNumber=456582;

let accName="Rohit";

var accpassword="15892";

console.table([accountNumber,accpassword,accName]);

// we cannot update const keyword 
// let is an block scoped variable
// var is an global scoped variable 

//const accountNumber=896632;    // this will throw an error as we cannot reassign a const variable
let acccity="Delhi"; // this is allowed as let can be reassigned
accName="Hitesh"; // this is allowed as let can be reassigned


var accState="UP"; // this is allowed as var can be reassigned
//and var can also be redeclared it is a global scoped variable