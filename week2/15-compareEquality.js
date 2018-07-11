//15. Write some code to test two arrays for equality 
//using == and ===.Test the following:

let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log("Firstly, any two objects(even if they both have zero or the same exact properties) will never compare equally.");

function compareObjects(a, b) {
    //if two objects' lengths are not same, they are not same.
    if (a.length != b.length) {
        console.log("They are NOT SAME!");
    } else { //if their lengths are same, we must compare each element of them.
        a.sort(); //this is a selective point. they can be same even
        b.sort(); //-if same elements are on the different indexes.
        var result = true;
        for (k = 0; k < a.length; k++) { // compare each element
            var result = result && (a[k] == b[k]);
        };
        if (!result) {
            console.log("They are NOT SAME!");
        } else {
            console.log("They are EXACTLY SAME!");
        }
    };
}

compareObjects(x, y);
