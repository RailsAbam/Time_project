let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;
//Calculating the Height and Mass;
let markBmi = markMass / markHeight ** 2 ;
let BmiJohn = johnMass / (johnHeight * johnHeight);
console.log(markBmi);
console.log(BmiJohn);



if(markBmi > BmiJohn){
console.log(`Mark BMI is ${markBmi} which is much higher John BMI  ${(BmiJohn)}`);
}else{
    console.log(`Johns's BMI is ${(BmiJohn)} which is lower than Mark ${(markBmi)}`)
}