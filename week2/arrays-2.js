//this is what we have at the beginning
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];

//2.1 adding 'turtle'
favoriteAnimals.push('turtle');
//2.2 logging new array
console.log(favoriteAnimals);

//2.3 adding a new element to a specific place
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
}
favoriteAnimals.insert(1, 'meerkat');

//2.4 logging the statement in words what I do
console.log("Now I will insert a new animal named 'meerkat' between 'blowfish' and 'capricorn'.")

//2.5 logging new array
console.log(favoriteAnimals);

//2.6 Logging the length of the array with a message
console.log("The array has a length of: " + favoriteAnimals.length);

//2.7 Jason does not like 'giraffe', delete this animal from the array.
favoriteAnimals.splice(3, 1);

//2.8 logging your new array.
console.log(favoriteAnimals);

//2.9 finding index of 'meerkat' 
var index = favoriteAnimals.indexOf('meerkat');

//2.10 Log the index of 'meerkat' with a message
console.log('The item you are looking for is at index: ' + index);

