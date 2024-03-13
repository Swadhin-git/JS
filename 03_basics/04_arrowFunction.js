const user={
    username:"swadhin",
    price:999,
    welcomMessage: function(){
        console.log(`${this.username} welcom to webside`);
        console.log(this);
    }
}
// user.welcomMessage();
user.username="sam";
// user.welcomMessage();
// console.log(this); // if we print only this it will give current context of curr obj

// function chai(){
//     let username= "swadhin";
//     console.log(this.username);// undefind
// }

// chai();

const chai= ()=> {   
    let user="swadhin";
    console.log(this);
}

// chai();

//  ( ) => { }  //this is the syntax of arrow function, it is mostly lambda of java

const addtwo=(num1,num2)=>{ return num1+num2 } //if we write inside {} then return is mandatory
const add=(num1,num2)=> num1+num2 //if we dont write {} the return is implicite we need not to write it
// console.log(add(2,3));

/* if we want to return an object then the syntax is */
const addTwo=() => ( {username:"swadhin"} ) // we have to write that object inside a paranthesis