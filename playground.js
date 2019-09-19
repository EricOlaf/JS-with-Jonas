//////////////////////////////
//HOW SCOPING WORKS
//////////////////////////////

// var x = 1;

// y = x + 2;
// console.log('y = ' + y);


// let myFunc = () => {
//     console.log('x = ' + x);
//     y = x + 2;
//     console.log('y = ' + y);
//     x = 5;
// }

// myFunc();

// console.log(y);
// console.log(x);


// console.log(x[0])

//////////////////////////////
//LEXICAL
//////////////////////////////

// let boo;

// if(boo){
//     console.log("boo is true")
// } else { console.log("boo is false") }

//////////////////////////////
//PARENTHESES
//////////////////////////////

// function findPar(str) {
//     let penalty = 0, braces = 0;

//     for(let i = 0; i < str.length; i++) {
//         if(str[i] === '(') {
//             braces ++;
//         } else if(str[i] === ')') {
//             braces --;
//         } if( braces < 0){
//             penalty ++;
//             braces ++;
//         }
//     }
//     return(penalty + braces)
// }

// let ans = findPar("((((())()()")

// console.log(ans)


//object inherting from another object
// var obj1 = {
//     name: "eric",
//     age: 30
// }

// let obj2 = obj1
// obj1.age = 40;
// console.log(obj1.age, obj2.age)


// object inheriting from a variable
//They are different and show that when an obj inherits from a variable it apparently doesn't just point to it.

// var ageVar = 30;

// let objAge = {};
// objAge.age = ageVar;

// ageVar = 40;

// console.log(ageVar, objAge.age);

//variable inheriting from an object
//shows that the variables store info and not just point

// var obj1 = {
//     name: "eric",
//     age: 30
// }

// let varAge = obj1.age;

// obj1.age = 40;

// console.log(obj1.age, varAge)

/////////////////////////////////////////
// Lecture: Passing functions as arguments
/////////////////////////////////////////

// var years = [1990, 1988, 1993, 2000, 2007];

// function arrayCalc (arr, fn) {
//     var arrRes = [];
//     for (let i = 0; i < arr.length; i++) {
//         arrRes.push(fn(arr[i]))
//     }
//     return arrRes;
// }

// function calcAge(el) {
//     return(2019 - el)
// }

// let ages = arrayCalc(years, calcAge);
// console.log(ages);


// function isFullAge(el) {
//     return el >= 21;
// }

// var fullAges = arrayCalc(ages, isFullAge)
// console.log(fullAges)

// function maxHeartRate(el) {
//     if(el >= 18 && el <= 81) {
//         return Math.round(206.9 - (0.67 * el)) 
//     }else {
//         return -1;
//     }
    
// }

// let rates = arrayCalc(ages, maxHeartRate);
// console.log(ages)
// console.log(rates)

//////////////////////////////////////////////////
// Lecture: Functions returning another function
//////////////////////////////////////////////////

// function intQuestion(job) {
//     if (job === "designer") {
//         return function(name){
//             console.log(name + " can you please explain what UI/UX is?")
//         }
//     } else if (job === "teacher") {
//         return function(name){
//             console.log(name + ", what subject do you teach?")
//         }
//     } else {
//         return function(name){
//             console.log( "Hello " + name + " what do you do?" )
//         }
//     }
// }

// let teacherQuestion =  intQuestion('teacher');
// teacherQuestion("Abby");

// let designerQuestion = intQuestion('designer');
// designerQuestion("Eric"); 
// designerQuestion("Brandon");

// intQuestion("nada")("Sean");
//The above way is another way to call a function right after the wrapper function has been called.


////////////////////////////////////////////////////////////
// Lecture: Immediately invoked function expression (IIFE)
////////////////////////////////////////////////////////////
//if score is greater than 5 it's a win, if less than 5 it's a loss.

// function game() {
//     var score = Math.random() * 10
//     console.log(score >= 5)
// }

// game()

//IIFE will make the above easier

// (function () {
//     var score = Math.random() * 10
//     console.log(score >= 5)
// })();

//What's in () cannot be a statement, so essentially we trick the computer into thinking it's a function expression, otherwise a anonomyous function declaration would throw an error.

////////////////////////////////////////////////////////////
// OBJECTS - 
////////////////////////////////////////////////////////////


var obj1 = {
    func1: function() {
        return this
        
    }
}

console.log(obj1.func1())


var john = {
    name : "john",
    yearOfBirth : 1988,
    job : "programmer"
}

var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

var eric = new Person("Eric", 1988, "Programmer")
//The above is called instantiation!
//When we use the new kw a new empty object is created. The new kw as well makes it so the this kw is tied to the new empty object.
console.log(eric);

//To add a method onto the person constructor would be acceptable but if you want to save space in memory you should use a prototype on the constructor so that the method is stored once in code but can be accessed by all instances.

// Inheritance is when we add things into the constructor's prototype prpoerty.

Person.prototype.calculateAge = function() {
    console.log(2019 - this.yearOfBirth);
}

// Again what we did above is prototype inheritance which allows us to store info once on the prototype property of the constructor but lets all instances use the the method.

Person.prototype.lastName = "Olaveson";

console.log(eric.lastName)
