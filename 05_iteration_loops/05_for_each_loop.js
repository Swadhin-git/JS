const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach(function (val) {
    // console.log(val);
});

/* here forEach loop is a call back function loop means we have to give a function in forEach ().
callback function did't have any name. callback function can be an arrow function
*/

coding.forEach( (item) => {  // here item means each element of array
    // console.log(item); 
} );

function printMe(item){
    console.log(item);
};
// coding.forEach(printMe);

coding.forEach( (item, index, arr)=> {
    // console.log(item, index, arr);
} );

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {  // here item means each element of object

    console.log(item.languageName);
})


