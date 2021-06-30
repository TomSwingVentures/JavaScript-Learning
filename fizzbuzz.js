//Write a function that takes a number. If the number is a multiple of 3, 
//print the word "fizz". If the number is a multiple of five, print the word "buzz". 
//If the word is a multiple of both 3 and 5, print "fizzbuzz".

//function RandomInt() {

//}
//let m = Math.random();
//console.log(m);



function rand(m, n) {           // this is a helper function taken from the book to generate an integer
    return m + Math.floor((n - m + 1)*Math.random());
    }
integer = rand(1, 100)

//console.log(integer, " test")   - this line is only here for me to check that the program is running
            // - is there any other way to print something?

if (integer % 5 ===0 && integer % 3 === 0) {
    console.log("fizzbuzz")
} 
else if(integer % 5 === 0){
    console.log("buzz")
}
else if(integer % 3 === 0){
    console.log("fizz")
}
else {
    console.log(integer)
}