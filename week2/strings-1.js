//this is what we have at the beginning
let myString =
    "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);

//to measure length of myString
let lengthOfMyString = myString.length
console.log(lengthOfMyString);

// this function is used to remove commas in a string
function removeCommas(aStr) {
    let numberOfCommas = (aStr.match(/,/g) || []).length;
    for (k = 0; k < numberOfCommas; k++) {
        let comma = aStr.indexOf(",");
        let commaGone = aStr.slice(0, comma);
        let afterComma = aStr.slice((comma + 1), aStr.length);
        var aStr = commaGone + " " + afterComma
    }

    return aStr;
}

//the function to remove commas in myString
myString = removeCommas(myString);

console.log(myString);



