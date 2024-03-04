// console.log("2" == 2); //true
// console.log(2 < 1);
// console.log(2 <= 3);
// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 != 2);

/* perfer to compair same datatype not different */

// console.log("2">1); // true
// console.log("02">1); // true

// console.log(null>0);  //false
// console.log(null==0); //false
// console.log(null>=0); //true
// console.log(null<=0); //true
/* 
    The reason is that an equality check == and comparision >, <, >=, <= works differently.
    Comparision convert null to a number, treating it as 0.
    Thats why null>=0 it true and null>0 is false.
*/

/* strict check [ === ] -> It will check values and data type both*/

// console.log("2"===2); // false
console.log("2" === "3"); // false
console.log("2" === "2"); // true
