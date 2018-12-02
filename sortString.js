// Good morning! Write a function called sortString that takes a string of letters and returns 
// a string with the letters sorted in alphabetical order.

// Input:
// 'dcba'
// 'zycxbwa'
// 'AzycxbCwBaA'

// Expected Output:
// 'abcd'
// 'abcwxyz'
// 'AABCabcwxyz'


// SOLUTION 1
function sortString(str) {
    let newArray = [];
    let newString = '';

    for(i = 0; i < str.length; i++) {
        newArray.push(str[i]);
        newArray.sort();
        console.log(newArray);
    }
    newString = newArray.join("");
    console.log(newString);
    return newString;
}

console.log(sortString('AzycxbCwBaA'));

// SOLUTION 2
// function sortString(str) {
//   return str.split("").sort().join("");
// }