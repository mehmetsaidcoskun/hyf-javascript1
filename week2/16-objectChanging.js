//16.
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

//Show that changing o2 changes o3 (or not) and 
//changing o1 changes o3(or not).


o1.foo = "arm";
console.log(o1);
console.log(o2);
console.log(o3);
console.log("when I change o1; o2 or o3 is not changing.")

console.log("\n");

o2.foo = "leg";
console.log(o2);
console.log(o3);
console.log("when I change o2; o3 is changing.")

//Does the order that you assign(o3 = o2 or o2 = o3) matter ?
console.log("\nof course, it is about assigning")