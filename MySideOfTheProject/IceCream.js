const flavour = "chocolate";
const topping = " sprinkles";
const Vessel = "bowl";

if(topping === " bananas" &&  flavour === "chocolate" ||  Vessel === "Wafer cone "){
    console.log("Please check our menu and try again.");
}else if( flavour === "chocolate" && topping === "peanuts" || Vessel === "Wafer-cone "){ // changes topping to peanuts  
        console.log("Great choice! Your ice cream is at the next window.");
}else if(flavour === "chocolate " || topping === "sprinkles" && Vessel === "sugar-cone"){
    console.log("Great choice! Your ice cream is at the next window Go get it");
}else if(flavour === "chocolate"  && topping === "sprinkles" || Vessel === "bowl"){
    console.log("Please check our menu and try again check later.");
}



const shirtWidth = 28; // size S (small)
const shirtLength = 34 // size M (medium)
const shirtSleeve = 10.13;// size M (medium)
let  None  = "NA"
if((shirtWidth >= 18 && shirtLength < 20) && ( shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)){
    console.log("S")
}else if((shirtWidth >= 20  && shirtWidth < 22 ) && ( shirtLength >= 29 && shirtLength < 30) && ( shirtSleeve >= 8.38 && shirtSleeve < 8.63)){
    console.log("M") 
}else if((shirtWidth >= 24 && shirtWidth <  26 ) && (shirtLength >= 31 &&  shirtLength < 33 ) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)){
    console.log("XL")
}else if ((shirtWidth >=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13)){
    console.log("2XL")
}else if ((shirtWidth >= 28  && shirtWidth < 30 ) && (shirtLength >= 34 && shirtLength < 36) && (shirtSleeve>=9.63 && shirtSleeve < 11.5) ){
    console.log("3XL")
}else(
    console.log(None)
)


// your code here
let size = "NA";

if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
    size = "S";
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
    size = "M";
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
    size = "L";
}
else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
    size = "XL";
}
else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
    size = "2XL";
}
else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
    size = "3XL";
}
else {
    size = "NA";
}
console.log(size);


//ternarY Operator
const isGoing = true;
const  color = isGoing ? "green" : "red";
console.log(color);