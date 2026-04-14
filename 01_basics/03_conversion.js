let score = "44abx" // after applying ""it becomes string,  let score = null,for value of null it shows 0, for undefined it shows NaN.

//console.log(typeof score);

let valueInNumber = Number(
    score
)// writing in this formate confirms it is no.
//console.log(typeof valueInNumber);
//console.log( valueInNumber);// shows NaN bcz of abx

let isLoggedIn ="nikhil"// for 1 -true, for " " -false,for "nikhil"-true
let booleanIsLoggedIn =Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let someNumber = 04
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

