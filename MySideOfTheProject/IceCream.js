const flavour = "chocolate";
const topping = " sprinkles";
const Vessel = "bowl";

if(topping === " bananas" &&  flavour === "chocolate" ||  Vessel === "Wafer cone "){
    console.log("Please check our menu and try again.");
}else if( flavour === "chocolate" && topping === "peanuts" || Vessel === "Wafer-cone "){ // changes topping to 
        console.log("Great choice! Your ice cream is at the next window.");
}else if(flavour === "chocolate " || topping === "sprinkles" && Vessel === "sugar-cone"){
    console.log("Great choice! Your ice cream is at the next window Go get it");
}else if(flavour === "chocolate"  && topping === "sprinkles" || Vessel === "bowl"){
    console.log("Please check our menu and try again check later.");
}

