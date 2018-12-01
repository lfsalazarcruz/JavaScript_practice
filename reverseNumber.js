// Instructions from your teacher:
// Good morning! Write a function called reverseNumber that reverses a number.

// Input Example: 
// 12345
// 555

// Output Example:  
// 54321
// 555

// SOLUTION 1

function reverseNumber(num) {
    let reverseResult = '';
    let numSplit = num.toString();
    for(i = numSplit.length - 1; i >= 0; i--) {
        console.log(numSplit[i]);
        reverseResult = reverseResult.concat(numSplit[i]);
        console.log(reverseResult);
    }
    return parseInt(reverseResult); // parseInt converts a string to a number 
}

console.log(reverseNumber(1234567));

// SOLUTION 2
// function reverseNumber(num) {
//   num = num + "";
// 	return parseInt(num.split("").reverse().join(""));
// }