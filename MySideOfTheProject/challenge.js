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


const inputYear = "1993";
changeNumber = Number(inputYear);// Changing the string to a Number; 
console.log(changeNumber + 18);
//Changing a number to A String 123;

num = 123;
str = String(num);
console.log(str);


console.log('23' - '10' - 3);
console.log('22' * 2);