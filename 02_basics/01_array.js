//array in other programing languaages contain elements of same datatype
//but in javascript, array can contain elements of different datatypes

// const arr = [1, "hello", true, null, undefined, { key: "value" }, [1, 2, 3]];
// console.log(arr);



// // method 1 of creating an array without the square brackets
// const myarr=new Array(1,2,3,4,5);//this will create an array with 5 elements 

// //traditional method of creating an array 
// const myarr2 = [1,2,3];//this will create an array with 3 elements

// //array methods

// myarr.push(6);//this will add 6 at the end of the array
// console.log(myarr);
// myarr.pop();//this will remove the last element of the array
// console.log(myarr);

// myarr.unshift(9);//this will add 9 at the start of the array but this method is not recommended
// //  as it is slow it will shiftindexes valur of tall other elements to add 9 in the start
// console.log(myarr);
// myarr.shift();//removes the first elemnt from the array
// console.log(myarr);

// console.logmyarr.includes(3);//this will return true if 3 is present in the array, otherwise false
// console.log(myarr.indexOf(5));//this will return the index of 5 in the array,if not presemt it will return -1
// console.log(myarr.length);//this will return the length of the array


// const newarr= myarr.join();//this will convert the array to a string with comma separated values
// console.log(newarr);//this will return the string "1,2,3,4,5,6"
// console.log(typeof newarr);//this will return the type of the variable, which is string


//impotant methods of array
//Slice and splice

const navinarr=[0,1,2,3,4,5];
console.log(navinarr);//[0, 1, 2, 3, 4, 5]
const checkarr =navinarr.slice(1,4);
//this will return a new array with elements from index 1 to index 4 (not including index 4)
console.log(checkarr);//[1, 2, 3]
console.log(navinarr);//[0, 1, 2, 3, 4, 5] -original array is not modified

//splice method is used to add or remove elements from the array
//it modifies the original array
navinarr.splice(1,4);//this will remove 4 elements starting from index 1 to index 4 and tthis willl modify the original array
console.log(navinarr);//[0, 4, 5] -original array is modified
