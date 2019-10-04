
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

function strong(n) {

    return "STRONG!!!!" || "Not Strong !!" ;
  }