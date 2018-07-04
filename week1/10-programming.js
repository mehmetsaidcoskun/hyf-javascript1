var myMultipleTypeArr = ["asd", 123, true];

console.log("10.1- \nYes, I can:"
	+ "\ntypeof myMultipleTypeArr[0] returns " + typeof myMultipleTypeArr[0]
	+ "\ntypeof myMultipleTypeArr[1] returns " + typeof myMultipleTypeArr[1]
	+ "\ntypeof myMultipleTypeArr[2] returns " + typeof myMultipleTypeArr[2]
	+ "\n \n"
)


var calculation = 6/0 === 10/0;
var calculation2 = 10/0 - 6/0;
var calculation3 = (-10)/0 < 6/0;

console.log("10.2- \n" + "Infinity is not a real number, it is an idea. An idea of something without an end. Infinity cannot be measured.");

console.log("6/0 === 10/0 = " + calculation);

console.log("10/0 - 6/0 = " + calculation2);

console.log("(-10)/0 < 6/0 = " + calculation3);

