// let name="swadhin";
const repo=20;
// console.log(name+repo+ "hii");

/*use of backtick symbol( ` ) bellow to Esc key
    we use it for string interpolation
    useing this we can make place holders
    ex -> `hello ${name}` output-> hello swadhin # name is dynamic now
*/
// console.log(`hello my name is ${name} and my repo count is ${repo}`);

/* tow way to create string
    1. let name="swadhin";  /  let name='swadhin';
    2. let name=new String("swadhin");
*/
const getName=new String('swadhin') // it is a object type string 
/*
string -> swadhin 
*/ 
// console.log(getName[0]);
// console.log(getName.length);
// console.log(getName.toUpperCase());
// console.log(getName.charAt(2));
// console.log(getName.indexOf('n'));
// console.log(getName.substring(0,4));
// console.log(getName.slice(0,4));
const newStirng1="   swadhin    ";
console.log(newStirng1);
console.log(newStirng1.trim());
let url="https://swadhin.com/swadhin12";
console.log(url.replace(12, '-'));
let xy=getName.split()

