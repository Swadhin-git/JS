/* 
 **  Premitive dataType 7 types these are call by reff
    String, Number, Boolean, null, undefind, Symbole, Bindint

 ** Non Primitive or Refference type
    Arryas, Objects, Functions


*/

let id1 = Symbol("123"); //Ex of symbole dataTypes
let id2 = Symbol("123");
console.log(id1 == id2); //false  // Though it look same but it is not same

const heros = ["shaktiman", "Nagraj", "doga"]; // Arrays
let myObject = {
    name: "swadhin",
    age: 25
}

const myFuncton=function(){
    console.log("hello world");
}

console.log(typeof (myObject));