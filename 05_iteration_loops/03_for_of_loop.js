/* << for of loop >>
this is an array specific loop
somthig like ["", "", ""] and  [{}, {}, {}]
*/ 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`) // it will print each letter in that string
}

// Maps

// it map we can store key and value pare but it dose't matter whta is the data type

const map = new Map()
map.set(1, "India")
map.set(2, "United States of America")
map.set(3, "France")
map.set(4, "India")

// console.log(map);

for (const key of map) {
    // console.log(key);
} // it dose't matter if we write key or value it will give both key and value in number of array 

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    // console.log(key, ':-', value);
    
} //for of loop will not work because object is not iterable, for in will work
