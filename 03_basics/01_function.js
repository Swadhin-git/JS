function math(n1,n2){
    console.log(n1+n2);
}
// math(2,3);

function add(n1,n2){
    return n1+n2;
    
}
const result=add(2,3);
// console.log(result);
function loginUserMessage(username){
    return `${username} just loggedin`;
}
// console.log(loginUserMessage("swadhin"));

function claculateCartPrice(...num1){
    return num1;
}   // if we give sprade operaotr in a function then it is called rest operator
// console.log(claculateCartPrice(2,3)); 

function cartPrice(val1,val2, ...num){
    return num;
}// first two value will go to val1 and val2 and remaining will go to num array
// console.log(cartPrice(200,300,4000,5000));

const user ={
    name:"swadhin",
    age:25
}
function handleObject(anyObject){
    console.log(`${anyObject.name} age ${anyObject.age}`);
}
// handleObject(user);

myNewArray=[200,300,4000,5000];
function returnSecondValue(getArray){
    return getArray[1];
}
// console.log(returnSecondValue(myNewArray));