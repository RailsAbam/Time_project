

const age = 15;

if(age >= 18){
    console.log("Sarah can start driving licence");
}else{
    const yearLeft = 18 - age;
    console.log(`Sarah is too Young. wait for another ${yearLeft} years`);
}


const birthYear = 1998;
let century;
if(birthYear <= 2000){
    century = 20;
}else{
    century = 21;
}
console.log(century);