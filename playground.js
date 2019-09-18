// const x = 1;

// function myFunc(){
//     console.log(x);
//     x = x + 1;
//     console.log(x[0]);
// }

// myFunc();

// console.log(x[0])

// let boo;

// if(boo){
//     console.log("boo is true")
// } else { console.log("boo is false") }

function findPar(str) {
    let penalty = 0, braces = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === '(') {
            braces ++;
        } else if(str[i] === ')') {
            braces --;
        } if( braces < 0){
            penalty ++;
            braces ++;
        }
    }
    return(penalty + braces)
}

let ans = findPar("((((())()()")

console.log(ans)