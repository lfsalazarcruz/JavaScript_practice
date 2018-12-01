/*
Good morning! Write a function called reverseString that accepts a string and returns a reversed copy of the string.

Input Example:
'hello world'
'asdf'
'CS rocks!'

Output Example:
'dlrow olleh'
'fdsa'
'!skcor SC'
*/


// SOLUTION 1
function reverseString(str) {

    let reverseString = '';

    for (i = str.length-1; i >= 0; i--) {
        console.log(str[i]);
        reverseString = reverseString.concat(str[i]);
        console.log(reverseString)
    }
    console.log(reverseString);
    return reverseString;
}

console.log(reverseString('Fernando'));

// SOLUTION 2
// function reverseString(str) {
//   let splitString = str.split("");
//   let reverseArray = splitString.reverse("");
//   let joinArray = reverseArray.join("");
  
//   return joinArray;
// }