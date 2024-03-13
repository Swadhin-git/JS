//scope is same as java's local scope and global sope but a little diffeerent
if(true){
    let a=10;
    const b=20;
    var c= 30;
}
var c=40;
// console.log(a); //error 
// console.log(b);  //error
// console.log(c); // but var variable we can print
/* var's have global scope so try to avoide using var.
except that all block level and global level scope is same.
*/

function one(){
    const username="swadhin";
    
    function two(){
        const website= "youtube";
        console.log(username);
    }
    // console.log(website); // scope  is inside two

    two();
}
// one();

