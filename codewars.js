
// function yearFunction(num, one, two, three){
//     let years = num;
//     for(let i = 0; i <= 15; i++){
//       if(i === 0){years - one}
//       else if(i === 1){years - two}
//       else if(i >= 2){years - three}
//       if(years < 4){
//         console.log(i)
//         return("zero")
//       }
//     }

// }
// let dy = yearFunction(15, 15, 9, 5);
// let cy = yearFunction(15, 15, 9, 4);

// console.log(dy, cy)

// return an index of section or -1 if past last section
// scrollY is a positive integer and sizes is an array of positive integers
// function getSectionIdFromScroll(scrollY,sizes){
//     let total = 0;
//     for(let i = 0; i < sizes.length; i++){
//       if(i === 0){
//         if(scrollY >= 0 && scrollY <= sizes[0]){
//             console.log("hit ind " + i)
//           return 0
//         } else {
//           total += sizes[i];
//           console.log("continue ind " + i)
//           continue;
//         }
//       } else if( scrollY > total && scrollY <= total+sizes[i] ){
//         console.log("hit ind " + i)
//         return i
//       } else {
//         total += sizes[i]
//       }
//     }
//     return -1
//  }

//  console.log(getSectionIdFromScroll(299,[300,200,400,600,100]))

//  console.log(getSectionIdFromScroll(30000,[300,200,400,600,100]))

// var orderedCount = function (text) {
//     let ans = [];
//     let letterArr = [];
//     for(let i = 0; i < text.length; i++){
//         let j = letterArr.indexOf(text[i]);
//         if(j !== -1){
//             ans[j][1]++;
//         }else{
//             ans.push([text[i], 1]);
//             letterArr.push(text[i]);
//         }
//     }
//     return ans;
//   }

//   console.log(orderedCount("abracadabra"))

// function par(str){
//     let c, p;
//     c = 0;
//     p = 0;

//     for(let i = 0; i < str.length; i++){
//         if(str[i] === "("){
//             c++;
//         }else if(str[i] === ")"){
//             c--;
//         }
//         if(c < 0){
//             p++;
//             c++;
//         }
//     }
//     return c+p
// }

// console.log(par("()"))
// console.log(par("(()"))
// console.log(par("())"))
// console.log(par(")"))
// console.log(par("("))
// console.log(par(")("))

// function strong(n) {
//     let x = n + "";
//     total = 0;
 
//     for(let i = 0; i < x.length; i++){
//         let single = parseInt(x[i]);
//         let singleTotal = 1;
//         for(let j = 1; j <= single; j++){
//             singleTotal *= j;
//         }
//         total += singleTotal;
//     }
//     if(total === n){return "STRONG!!!!" }
//     else{ return "Not Strong !!" }
//   }

//   console.log(strong(145))
//   console.log(strong(14))

// function stackHeight3d(l) {
//     return l ? ((l - 1) * .8164965809277259375 + 1).toFixed(4) : 0;
// }

// console.log(stackHeight3d(0))
// console.log(stackHeight3d(2))
// console.log(stackHeight3d(24))

// function addLetters(...letters) {

//     let lettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
//     let total = 0;
    
//     if (letters.length < 1){return "z"};

//     for( let i = 0; i < letters.length; i++ ){
//         total += lettersArray.indexOf(letters[i]) + 1;
//     }

//     console.log(total);

//     if(total < 26){
//         return lettersArray[total -1]
//     } else if(total % 26 === 0){
//         return "z"
//     } else{
//         return lettersArray[total % 26 -1]
//     }

//     return "not working";
       
// }

// console.log(addLetters("a", "b"))
// console.log(addLetters("a", "y"))
// console.log(addLetters("b", "y"))

// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////

// /*MY ANSWER*/

// let noSpace = (str) => {
//     let ans = ""
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== " "){
//             ans += str[i] 
//         }
//     }
//     return ans
// }

// console.log(noSpace("a b 1 2"))
// console.log("ab12")

// /*COOL ANSWER!!!*/

// function noSpace(x){return x.split(' ').join('')}


// ///////////////////
// /*NEW PROBLEM*/
// ///////////////////


// function calculate(str) {
//     const newStr = str.split("")
//     let sum = 0;
//     let currentNum = 1;
    
//     newStr.forEach((s)=>{
    
//         if (isNaN(parseInt(s))){
//             if( s === "p"){
//                 currentNum = 1
//             }
//             if(s === "m"){
//                 currentNum = -1
//             }
//         } else {
//             sum += s * currentNum
//         }
//     })
//     return sum;
// }
    
//     console.log(calculate("1plus2plus3plus4"))

 /*COOL ANSWER!!!*/

 
//  function calculate(str) {
//     return eval(str.split("plus").join("+").split("minus").join("-")).toString();
//   }
  
//   console.log(calculate("1plus2plus3plus4"))

//   console.log(eval("2+2"))

//eval() is a global function in JavaScript that evaluates a specified string as JavaScript code and executes it.


