//CHALLENGE NUMBER 4

let john = {
    name: "John Smith",
    mass: 200,
    height: 6,
    bmiFunc: function(){
       this.bmi = this.mass / this.height^2;
       console.log(`${this.name} has a BMI of ${this.bmi}`)
       return this.bmi
       //We are setting a bmi variable in the object with this function
    }
}

let mark = {
    name: "Mark Black",
    mass: 220,
    height: 6.2,
    // bmiFunc: function(){
    //    return this.bmi = this.mass / this.height^2;
    // }
}
mark.bmiFunc = john.bmiFunc;
// This is how to inherit a method from another object. All possible because of the this kw and the fact that it's not set until the function it is called.
let markBMI = mark.bmiFunc();
let johnBMI = john.bmiFunc();

console.log

switch(true){
    case johnBMI > markBMI:
        console.log("John has the higer BMI of " + johnBMI)
        break
    case johnBMI < markBMI:
        console.log("Mark has the hige rBMI of " + markBMI)
        break
    default: console.log("They're both hosed!!!")
}