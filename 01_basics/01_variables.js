const accountId=1;
let accountEmail="swadhin@gmail.com";
var accountPassword="swadhin12345";
/* prefer not to use var because of issue in block scope  */
accountCity="bbsr";
let accountState;
// accountId=2; // not possible because accountId is constant
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
