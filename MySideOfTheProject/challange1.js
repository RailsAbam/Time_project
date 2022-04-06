 

const scoreDolphin = (96 + 108 + 89) / 3 ;
const scorekoalas = (88 + 91 + 110) / 3 ;
console.log(scoreDolphin, scorekoalas);

if(scoreDolphin > scorekoalas){
    console.log('Dolphins win the Trophy 🏆')
} else if (scorekoalas > scoreDolphin){
    console.log("Koalas won the Trophy 🏆")
} else if (scoreDolphin === scorekoalas){
    console.log("Its A drawn Game")
}