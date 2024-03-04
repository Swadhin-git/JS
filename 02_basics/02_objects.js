const mySymb = Symbol("xyz");
const user = { id: 1, fullname: ["swadhin", "kishor", "mishra"], age: 25, loc: "bbsr", "E mail": "swadhin@gmail.com" };
console.log(user.id); // we can acess obj ele by using . but anathor way is -
console.log(user["fullname"]); // we can access by -> '[]' but we have to provide key as string.
// console.log(user.E mail); //-> error;
console.log(user["E mail"]);
