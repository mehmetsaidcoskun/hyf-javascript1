//Create an object and a function that takes 
//the object as a parameter and prints out all of 
//its properties and values.

//creating an object
var obj1 = {
    name: "Mehmet",
    age: 24,
    job: "web developer"
}

//function to print out properties and values of the object
function objPrinting(anObject) {
    for (var property in anObject) {
        console.log(property + ": " + anObject[property]);
    }
}

//check and example
objPrinting(obj1);