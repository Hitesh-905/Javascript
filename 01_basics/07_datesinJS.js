// console.log("hello world");

// console.log(Date);//this will return the current date and time

// const checkingtype=new Date();
// console.log(typeof checkingtype);

// const currentdate=new Date();
// console.log(currentdate.getDate());
// console.log(currentdate.toDateString());
// console.log(currentdate.toLocaleString());
// console.log(currentdate.getFullYear());

let datebyme=new Date(2023,0,15);
// console.log(datebyme.toLocaleString());//this will return the date in the format of your locale


// let timestamp=new Date();
// console.log(timestamp.getTime());//this will return the timestamp in milliseconds since January 1, 1970

// let timenow= Date.now();//this will return the timestamp in milliseconds since January 1, 1970
// console.log(timenow);



let mydate=new Date();
console.log(mydate);//this will return the current date and time

console.log(mydate.toLocaleDateString());//this will return the date and type in the form of your locale.

mydate.theLoacaleString()('default',{
    weekday: 'long', // "Monday"
    year: 'numeric', // "2023"
    month: 'long', // "January"
})