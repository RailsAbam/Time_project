

const eatsPlants = false;
const eatsAnimals = true;
let  category ;


category = eatsPlants ? ( eatsAnimals ? "herbivore" : "omnivore") : (eatsAnimals ? "carnivore" : "undefined")

// output
console.log(category);
let option = 1;
if (option === 1) {
  console.log("You selected option 1.");
} else if (option === 2) {
  console.log("You selected option 2.");
} else if (option === 3) {
  console.log("You selected option 3.");
} else if (option === 4) {
  console.log("You selected option 4.");
} else if (option === 5) {
  console.log("You selected option 5.");
} else if (option === 6) {
  console.log("You selected option 6.");
}



switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break;
  default:
    console.log("You did not select a valid option.");



const favoriteFood = "soup";
let restaurant = undefined;

switch(favoriteFood) {
  case "pizza":
    restaurant ="pizzeria";
    break;
  default:
     restaurant ="diner";
    break;   
  case "tacos":
    restaurant ="taqueria";
    break;
  case "sushi": 
    restaurant ="sushi bar";
    break;
  case "pancakes": 
    restaurant ="pancake house";
    break;
}

console.log("Go to the " + restaurant);



const month = 5;
let days;

switch (month) {
  case 1:
    days = 31;
    break;
  case 2:
    days = 28;
    break;
  case 3:
    days = 31;
    break;
  case 4:
    days = 30;
    break;
  case 5:
    days = 31;
    break;
  case 6:
    days = 30;
    break;
  case 7:
    days = 31;
    break;
  case 8:
    days = 31;
    break;
  case 9:
    days = 30;
    break;
  case 10:
    days = 31;
    break;
  case 11:
    days = 30;
    break;
  case 12:
    days = 31;
}

console.log('There are ' + days + ' days in this month.');
}