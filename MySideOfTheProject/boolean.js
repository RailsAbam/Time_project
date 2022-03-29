
const hasDriverLicence = true;
const hasGoodVision = false;

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);


if(hasDriverLicence && hasGoodVision){
     console.log("Rails can drive!!");
}else{
    console.log("someone else should drive!!!");
}