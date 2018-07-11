var a = 123;
var b = "asd";
var c = true;
var d = ["asd", 123];

console.log("The value of my variable a is: " + a);
console.log("The value of my variable b is: " + b);
console.log("The value of my variable c is: " + c);
console.log("The value of my variable d is: " + d);

console.log("The type of my variable a is: " + typeof a);
console.log("The type of my variable b is: " + typeof b);
console.log("The type of my variable c is: " + typeof c);
console.log("The type of my variable d is: " + typeof d);

var allVar = [a, b, c, d];
for (k = 1; k < allVar.length; k++) {
	if (typeof allVar[k - 1] == typeof allVar[k]) {
		console.log("SAME TYPE");
	} else { console.log("NOT SAME TYPE"); };

	if (typeof allVar[k - 1] == typeof allVar[k + 1]) {
		console.log("SAME TYPE");
	} else if (k + 1 >= allVar.length) {

	} else { console.log("NOT SAME TYPE"); };

	if (typeof allVar[k - 1] == typeof allVar[k + 2]) {
		console.log("SAME TYPE");
	} else if (k + 2 >= allVar.length) {

	} else { console.log("NOT SAME TYPE"); };
}


