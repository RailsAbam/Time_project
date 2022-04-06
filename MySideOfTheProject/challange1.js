 

const score = 100 - 150;
let teamName  = prompt("Enter Your Name first: ")
const enter =  Number(prompt("Enter a Number to win!!!: "));
if(enter === score){
    console.log("Your team" + " " + teamName + " scores " + enter + " " + "points")
}else if(enter < score){
    console.log ("Your team" + " " + teamName + " scores " + enter + " " + "points")
}else if (enter > score){
    console.log("Your team" + " " + teamName + " scores " + enter + " " + "points")
}//else if(enter != score || enter < score && enter >= score){
 //   console.log("You Win!!!!")
//}
