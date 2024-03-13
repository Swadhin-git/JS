// we  cant create object 2 types object.literals(like normaly we create objects) and singleton(using function constructor)
// Object literals ->

    const mySymb = Symbol("xyz");
    const user = { [mySymb]:"mySymb1",id: 1, "full name": ["swadhin", "kishor", "mishra"], age: 25, loc: "bbsr", "E mail": "swadhin@gmail.com" };
    /* To add a symbole in object first we have to declare it outside and the follow the syntax as writen.
         when we print that it will give the mysumb1 but that denote to xyz.
    */
    // console.log(user.id); // we can acess obj ele by using . but anathor way is -
    // console.log(user["full name"]); // we can access by -> '[]' but we have to provide key as string.
    // console.log(user.E mail); //-> error;
    // console.log(user["E mail"]);
    // console.log(user["full name"][0]);// here we are accessing element inside an array inside an object.
    // console.log(user[mySymb]);
    user.id=2;//here we are overriding the key
    // to make user unchangeable we will use freeze like "Object.freeze(user);"
    user.id=3;
    // console.log(user);
    
    user.greeting=function(){
        console.log("hello user");
    }
    
    user.greeting2=function(){
        console.log(`hello use ${this.id} ${this["full name"][0]}}`);
    }
    // console.log(user.greeting2());


//Singleton object and creating object using construction =>

    // const tinderuser=new Object(); // it is a singleton object 
    const tinderuser={}; // this is a non singleton object
    tinderuser.id=1;
    tinderuser.name="swadhin";
    tinderuser.isLoggedIn=false;
    // console.log(tinderuser);

    // console.log(Object.keys(tinderuser)); // this will give an array of all the keys of an object
    // console.log(Object.values(tinderuser)); // this will give an array of all the values of an object
    // console.log(Object.entries(tinderuser)); // this will give an array of key and values in a array
   // output -> [ [ 'id', 1 ], [ 'name', 'swadhin' ], [ 'isLoggedIn', false ] ]
    
    const regularUser={
        email:"swadhin@gmail.com",
        fullName: {
            userFullName:{
                firstName:"swadhin",
                lastName:"mishra"
            }
        }
    } // here we are creating nested objects(object inside objects )
    // console.log(regularUser.fullName.userFullName.firstName);

    const obj1={1:"a",2:"b"};
    const obj2={3:"a",4:"b"};
    const obj3=Object.assign({},obj1,obj2);
    // console.log(obj3);


//Object de-structure and JSON API intro 

    const course={
        courseName:"java script",
        price:"999",
        courseInstruuctor:"hitesh"
    }
    const {courseInstruuctor}=course; /* this is object destructur syntax, here we are assining obj ele to new variables and then dont need to call the ele with object
    we can all it directly by name*/
    console.log(courseInstruuctor); //output = hitesh

    const {courseInstruuctor: instructur}=course;
    console.log(instructur); //output = hitesh

