//CHALLENGE NUMBER 3
//bills = [124, 48, 268]
let tipArr=[], totalArr=[]


function tipCalculator(num){
    switch(true){
        case num < 50:
            tipArr.push(num*.2);
            totalArr.push(num*.2 + num);
            break;
        case num >= 50 && num <= 200:
            tipArr.push(num*.15);
            totalArr.push(num*.15 + num);
            break;
        case num > 200:
            tipArr.push(num*.1);
            totalArr.push(num*.1 + num);
            break;
        default: console.log("NAN silly goose")
    }
}

tipCalculator(124);
tipCalculator(48);
tipCalculator(268)

console.log(tipArr, totalArr)