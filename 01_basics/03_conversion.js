let score = "44abx" // after applying ""it becomes string,  let score = null,for value of null it shows 0, for undefined it shows NaN.

//console.log(typeof score);

let valueInNumber = Number(
    score
)// writing in this formate confirms it is no.
//console.log(typeof valueInNumber);
//console.log( valueInNumber);// shows NaN bcz of abx

let isLoggedIn ="nikhil"// for 1 -true, for " " -false,for "nikhil"-true
let booleanIsLoggedIn =Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

let someNumber = 04
let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);


// *********************operations*************************//

let value = 3
let negValue = -value
//console.log(negValue);
/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);
*/

let str1 ="hello"
let str2 =" nikhil"
let str3 = str1 + str2
//console.log(str3);

//console.log("1"+2);// problem occurs here shows 12 as a output
//console.log(1+"2");// problem occurs here shows 12 as a output
//console.log("1"+2 +2);// shows 122
//console.log(1+ 2+ "2");// shows 32

console.log(+true);//after using + its shows 1 as a output


let num1, num2, num3

num1 = num2 = num3= 2+2

let gameCounter = 100
//gameCounter++;
++gameCounter;
console.log(gameCounter);



