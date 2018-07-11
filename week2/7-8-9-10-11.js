//7. Make a list of vehicles
var vehicleList = ["motorbike", "caravan", "bike", "car"];

//8. How do you get the third element from that list?
console.log(vehicleList[2]);

//9. Change the function vehicle to use the 
//list of question 7. So that vehicle("green", 3, 1) 
//prints "a green new bike".
function vehicle(aColor, aNumber, age) {
    //if a vehicle is older than 2 years old, 
    //it will be stated as "used",
    //otherwise "new"
    var condition = 2 < age ? "used" : "new";
    console.log("a " + aColor + " " + condition + " " + vehicleList[aNumber - 1]);
}
//check and example
vehicle("green", 3, 1);

//10.Use the list of vehicles to write an advertisement. 
//So that it prints something like:
//"Amazing Joe's Garage, we service cars, motorbikes, 
//caravans and bikes.".
function myAdvertisement(anArray) {
    var leng = anArray.length
    var vehicleString = "";
    for (k = 0; k < (leng - 2); k++) {
        var vehicleString = vehicleString + vehicleList[k] + ", ";
    };
    console.log("Amazing Joe's Garage, we service " + vehicleString
        + anArray[leng - 2] + " and " + anArray[leng - 1] + ".");
}
//advertisement
myAdvertisement(vehicleList);


//11. What if you add one more vehicle to the list, can you 
//have that added to the advertisement without changing the 
//code for question 10 ?

//my answer: my function can print out the advertisement even if
//you add more than one new vehicles. Here it is:
vehicleList.push("truck", "tractor", "helicopter");

//if you dont believe, you can check it out :)
myAdvertisement(vehicleList);





