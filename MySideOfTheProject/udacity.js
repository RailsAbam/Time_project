
const Bill = 10.25 + 3.99 + 7.15;
console.log(Bill);

const tip = Bill /0.15;
total = tip;
console.log ("$" + total)
sum = total.toFixed(2);
console.log(sum);


//Checking Balance
 
const checkBalance = true;
const accountBalance = 20.673032;
const isActive = true;
if(checkBalance === true){
    console.log( accountBalance.toFixed(2) );
}
if(isActive === true && accountBalance > 0){
    console.log("My account is " + "$" + accountBalance.toFixed(2));
}else if( isActive === true  && accountBalance === 0){
    console.log("Your account is negative, please contact bank");
}else if (isActive === false){
    console.log("Your account is longer active");
}else{
    console.log("Thank you.Have a nice day");
}

