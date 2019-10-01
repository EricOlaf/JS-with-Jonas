
function yearFunction(num, one, two, three){
    let years = num;
    for(let i = 0; i <= 15; i++){
      if(i === 0){years - one}
      else if(i === 1){years - two}
      else if(i >= 2){years - three}
      if(years < 4){
        console.log(i)
        return("zero")
      }
    }

}
let dy = yearFunction(15, 15, 9, 5);
let cy = yearFunction(15, 15, 9, 4);

console.log(dy, cy)