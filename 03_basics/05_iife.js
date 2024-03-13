/* IIFE -> Immediately Invoked Function Expressions */
/*
    IIFE is something like a self invoke function and the syntax is two () as ()().
    In first () we will write our logic and the second one is for invoke.
    we can write arrow function in first () also. But one thing need to remember
    we have to provide " ; " and the end of the second (), because if we didn't provide it
    the our next iife functions are not going to eexecute, and we got error.

    if some one ask about type of iife then 1. named iife 2. iife 
    named iife -> means the function which have a name 
    iife -> means a simple arrow function
*/

(function one(){
    console.log('swadhin');
})();

(function two(args){
    console.log(`hello ${args}`);
})('sam');

(()=>{
    console.log("DB CONNECTED ");
})();

((args)=>{
    console.log(`hello ${args}`);
})('swadhin');