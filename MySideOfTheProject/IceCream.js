const flavour = "chocolate ";
const topping = " bananas";
const Vessel = "Wafer cone ";

if(topping === " bananas" &&  flavour === "chocolate " && Vessel === "Wafer cone "){
    conbsole.log("Please check our menu and try again.");
}else if( flavour === "chocolate" && topping === "peanuts" || Vessel === "Wafer cone "){
        console.log("Great choice! Your ice cream is at the next window.");
}else if(flavour === "chocolate " && topping === "sprinkles" || Vessel === "sugar cone"){
    console.log("Great choice! Your ice cream is at the next window")
}else if(topping === "sprinkles" && flavour === "chocolat" || Vessel === "bowl"){
    console.log("Please check our menu and try again.");
}