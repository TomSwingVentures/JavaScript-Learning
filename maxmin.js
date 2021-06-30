// want to request array lenght from the user - then set this as the length of the array, 
// which will be created by a while statement requestion numbers from the user until the array is built
// then it will cycle through the array comparing which number is larger and if larger replacing it, 
// then doing the same to find the min
// then print the max and min


const prompt = require('prompt-sync')({sigint: true});
var list_length = prompt("Enter length of list ");
const list_arr = [];

console.log("Enter number from list");

for ( let counter = 0; counter < list_length; counter ++){
    let temp_no = prompt();
    list_arr[counter] = temp_no;
    console.log(" ");
}
var high = 0;
var temp_high = 0;
var low = Number(list_arr[0]);
var temp_low = 0;

for ( let counter2 = 0; counter2 < list_length; counter2++){
    temp_high = Number(list_arr[counter2]);
    if(temp_high > high === true) {
        high = temp_high;
    }
    temp_low = Number(list_arr[counter2]);
    if(temp_low < low === true) {
        low = temp_low;
    }
}

console.log("Maxmimum: " + high +"\n");
console.log("Minimum: " + low);



