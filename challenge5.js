//CHALLENGE NUMBER 5

// johns bills 124, 48, 268, 180, 42
// tip 20% < $50
// tip 15% > 50, < $50
// tip 10% > 200


let johnBills = {
    billsArr: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    tipCalc: function(){
        for(let i = 0; i < this.billsArr.length; i++){
            switch(true){
                case this.billsArr[i] < 50:
                    this.tips.push(0.2 * this.billsArr[i]);
                    this.totals.push(0.2 * this.billsArr[i] + this.billsArr[i])
                    break
                case this.billsArr[i] >= 50 && this.billsArr[i] <= 200:
                    this.tips.push(0.15 * this.billsArr[i]);
                    this.totals.push(0.15 * this.billsArr[i] + this.billsArr[i])
                    break
                case this.billsArr[i] > 200:
                    this.tips.push(0.1 * this.billsArr[i]);
                    this.totals.push(0.1 * this.billsArr[i] + this.billsArr[i])
                    break
            }
        }
    }
}

johnBills.tipCalc()

console.log(johnBills.tips, johnBills.totals)

let markBills = {
    billsArr: [77, 375, 110, 45],
    tips: [],
    totals: [],
    tipCalc: function(){
        for(let i = 0; i < this.billsArr.length; i++){
            switch(true){
                case this.billsArr[i] < 100:
                    this.tips.push(0.2 * this.billsArr[i]);
                    this.totals.push(0.2 * this.billsArr[i] + this.billsArr[i])
                    break
                case this.billsArr[i] >= 100 && this.billsArr[i] <= 300:
                    this.tips.push(0.1 * this.billsArr[i]);
                    this.totals.push(0.1 * this.billsArr[i] + this.billsArr[i])
                    break
                case this.billsArr[i] > 300:
                    this.tips.push(0.25 * this.billsArr[i]);
                    this.totals.push(0.25 * this.billsArr[i] + this.billsArr[i])
                    break
            }
        }
    }
}

markBills.tipCalc()

console.log(markBills.tips, markBills.totals)

function tipper(arr){
    total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return(total/arr.length)
}

let johnAvg = tipper(johnBills.tips);
let markAvg = tipper(markBills.tips);

if(johnAvg > markAvg){
    console.log("John is the higher tipper with " + johnAvg)
}else{
    console.log("Mark is the higher tipper with " + markAvg)
}

