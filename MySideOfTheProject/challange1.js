 

const scoreDolphin = (96 + 108 + 89) / 3 ;
const scoreKoalas = (88 + 91 + 110) / 3 ;
console.log(scoreDolphin, scoreKoalas);
const  teamName = prompt("Enter Your Team name: ");
if(scoreDolphin > scoreKoalas && scoreDolphin >= 100){
    console.log(teamName + "  " + 'Dolphin win the Trophy 🏆')
} else if (scoreKoalas > scoreDolphin && scoreKoalas >= 100){
    console.log("Koalas won the Trophy 🏆");
} else if (scoreDolphin === scoreKoalas && scoreDolphin >= 100 && scoreKoalas >= 100){
    console.log("Both won the Trophy🏆");

}else(
    console.log("It A Drawn Game!!!")
)


