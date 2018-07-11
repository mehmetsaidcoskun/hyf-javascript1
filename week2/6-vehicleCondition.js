//Create a function called vehicle, like before, 
//but takes another parameter called age, so that 
//vehicle("blue", 1, 5) prints 'a blue used car'

function vehicle(aColor, aNumber, age) {
    var vehicles = ["car", "motorbike", "bike", "truck"];

    //if a vehicle is older than 2 years old, 
    //it will be stated as "used",
    //otherwise "new"
    var condition = 2 < age ? "used" : "new";
    console.log("a " + aColor + " " + condition + " " + vehicles[aNumber - 1]);
}

//check and example
vehicle("blue", 4, 3);