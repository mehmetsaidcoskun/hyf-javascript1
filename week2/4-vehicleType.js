//Create a function named vehicleType that receives a color, 
//and a code, 1 for car, 2 for motorbike.And prints 
//'a blue motorbike' for example when called as 
//vehicleType("blue", 2)

function vehicleType(aColor, aNumber) {
    var vehicles = ["car", "motorbike", "bike", "truck"];
    console.log("a " + aColor + " " + vehicles[aNumber - 1]);
}

//check and example
vehicleType("blue", 3);