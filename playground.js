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

var ageVar = 30;

let objAge = {};
objAge.age = ageVar;

ageVar = 40;

console.log(ageVar, objAge.age);

//variable inheriting from an object
//shows that the variables store info and not just point

// var obj1 = {
//     name: "eric",
//     age: 30
// }

// let varAge = obj1.age;

// obj1.age = 40;

// console.log(obj1.age, varAge)

Lecture: Passing functions as arguments

var years = [1990, 1988, 1993, 2000];

function arrayCalc (arr, fn) {
    var arrRes = [];
    for (let i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]))
    }
    return arrRes;

}