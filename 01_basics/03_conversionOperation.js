// ******************** DataTypes ********************

let score = "33abc";
// console.log(typeof score);

let valueInNumber = Number(score); // converting string to number
// console.log(valueInNumber);

/*
"33"=to number ->33
"33abc"=to number -> Nan(not a number)
"" to  boolean ->false, "swadhin" to boolean -> true
true=1, false=0 boolean to number
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn) // converting number to boolean
//console.log(booleanIsLoggedIn); //=> true


// ******************** Operations ********************


let value = 3;
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // it is 2 to the power 2
// console.log(2**3); // it is 2 to the power 3
// console.log(2/3); 
// console.log(2%3); // it will give remender 

let str1 = "hello ";
let str2 = "swadhin";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2); // 12 -> here and bellow js jus concatenate both value
// console.log(1 + "2"); // 12
// console.log("1" + "2"); // 12
// console.log("1" + 2 + 3); // 123
// console.log(1 + 2 + "3"); // 33 -> here js first add from left and then concantenate
// console.log(3+4*5/6); // here bodmas rule will applay
// console.log(true+);// error
// console.log(+true);// 1 because if we convert true to number it is 1 but increament will not happend it just convetr into positive number 
// console.log(-true);// -1 because if we convert true to number it is 1 but increament will not happend it just convetr into nagative number`
//console.log(true+); //error
// console.log(++1);// error
// console.log(1++);// error
let i=1;
++i; // pre increment -> increment before use or before execute
// console.log(i++); //2 //post increment -> increment after use or after execute
// console.log(i); //3
// console.log(false);