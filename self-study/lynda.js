/*
var grade = "Diesel";

switch ( grade ) {
	case "Regular":
		console.log("$3.15");
		break;

	case "Premium":
		console.log("$3.47");
		break;

	case "Diesel":
		console.log("$3.68");
		break;
	
	default:
		console.log("not valid");
}
*/

/*
var c;
c = "I am a";
c = c + " String!";
console.log(c);
*/

/*
function myFunction () {
	console.log("This is a function.");
}

var d = 123;
switch ( d ) {
	case 123:
	myFunction();
		break;

	default:
	console.log("not");
}
*/

/*
function plusFunction (a,b) {
	console.log(a+b);
}

plusFunction(1,1);
plusFunction(100,2334);
*/

/*
var x;
function simpleFunction() {
	x = 500;
console.log(x);
}
simpleFunction();
console.log(x);
*/

/*
var myName = "Mehmet Said";
console.log(myName.length);
*/

/*
var amount = 0;

var i = 1;
while (i<10) {
	amount += 10;
	i++;
}
console.log("amount is " + amount);
*/

/*
var b = 0;
var a = 100;

do {
	b += 10;
	a++
} while ( a<5);

console.log(b);
*/

/*
const person = "mauro";

switch (person) {
	case "dan":
		console.log("German");
		break;
	case "mauro":
		console.log("Italian");
		break;
	case "unmesh":
		console.log("Teacher");
		break;
	default:
		console.log("Student");
}
*/

/*
const game = [0, 0, 0, 0, 0, 0, 0, 0, 0];

switch (game.join(" ")) {
	case "000000000":
		console.log("Game did not start!");
		break;
	
	case "111000000":
	case "000111000":
		console.log("Player One win");
		break;
	
	case "222000000":
	case "000222000":
		console.log("Player Two win");
		break;
	
	default: 
		
} */

/*
const game = [0, 0, 0, 0, 0, 0, 0, 0, 0];
const gameLogicValidation = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

for (let k = 0; k < gameLogicValidation.length; k++) {
	let currentRule = gameLogicValidation[k];
	if (game[currentRule[0]] === 1 &&
		game[currentRule[1]] === 1 &&
		game[currentRule[2]] === 1) {
		console.log("Player One win!");
	}

	if (game[currentRule[0]] === 2 &&
		game[currentRule[1]] === 2 &&
		game[currentRule[2]] === 2) {
		console.log("Player Two win!");
	}
}
*/
/*
'use strict';

function myScope() {
	var a = 5;
	var b = 8 + a
	console.log("Here I am");
	return b; // 'return' causes function to jump to the end of it.
	let c = b + 2;
	console.log(c);
}
myScope();*/

/*
//exponantiality
function f(x) {
	result = 1;
	for (k = 0; k < 0; k++) {
		result = result * x
	};
	console.log(result);
}
f(2);
*/
/*
const myNumbers = [1, 2, 3, 4, 5];

for (const myNumber of myNumbers) {
	console.log(myNumber);
}
*/

/*
//truthy or falsy training
let x = 4;
if (x) {
	console.log("truthy");
} else {
	console.log("falsy");
}
*/












