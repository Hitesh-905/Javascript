//some more about arrays
// arrays are objects in javascript, so they can have properties and methods

const marvelHeros=["Iron Man","Thor","Hulk","Black Widow","Spider-Man"];
// console.log(marvelHeros);//this will print the array of marvel heros

const dcheroes=["batman","superman","flash"];
// console.log(dcheroes);//this will print the array of dc heros


// marvelHeros.push(dcheroes);
// console.log(marvelHeros);//this will print the array of marvel heros with dc heros added at the end

// console.log(marvelHeros[5]);//this method is not recommended as it add array inside array and makes it difficut to access elements inside the arary of an array

//another  thik thak way to add two arrays are 
const assembleHeros=marvelHeros.concat(dcheroes);//this will add the two arrays and return a new array
// console.log(assembleHeros);//this will print the array of marvel heros and dc heros combined

//best method to add two arrays is to use spread operator
const allHeros=[...marvelHeros,...dcheroes];//this will add the two arrays and return a new array
// console.log(allHeros);//this will print the array of marvel heros and dc heros combined


//another good method to add arrays in an single array is by using flat function
const nestedarray=[1,2,3,[4,5,6],[7,8,9]];//this will create a nested array
// console.log(nestedarray);

nestedarray.flat();//this will flatten the nested array and return a new array
// console.log(nestedarray.flat());//[1, 2, 3, 4, 5, 6, 7, 8, 9] -this will print the flattened array

//if we want to flatten the array to a specific depth we can pass the depth as an argument
const nestedarray2=[1,[2,[3,[4,[5]]]]];//this will create a nested array with depth of 5
// console.log(nestedarray2.flat(2));//[1, 2, [3, [4, [5]]]] -this will flatten the array to depth of 2
//or we can use Infinity to flatten the array to any depth

//if we want to check is any component an array or not we can use isArray method
const hitesh=5
console.log(Array.isArray(hitesh));//false

console.log(Array.from("hitesh"));

//an interesting interview question 
console.log(Array.from({name:"hitesh"}))//this will return an empty array because the object does not have any iterable properties
//we should first specify what to convert to an array whether the key or the value



let score1=100;
let score2=200;
let score3=300

console.log(Array.of(score1,score2,score3));//this will create an array with the given values
// console.log(Array.of(1,2,3,4,5));//this will create an array with the given values