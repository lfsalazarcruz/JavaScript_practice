/*
Good morning! Write a function that takes an array of strings and return the longest string in the array.

For example:
const strings1 = ['short', 'really, really long!', 'medium'];
console.log(longestString(strings1)); // <--- 'really, really long!'

Edge case: If you had an array which had two "longest" strings of equal length, your function should just return the first one.

For example:
const strings2 = ['short', 'first long string!!', 'medium', 'abcdefghijklmnopqr'];
console.log(longestString(strings2)); // <--- 'first long string'
*/

function longestString(arr) {
    let long1 = '';
    for (let i=0; i < arr.length; i++){
        if (arr[i].length > long1.length){
            long1= arr[i];
        }
    }
    console.log(long1);
    return long1;
}

let strArray = ['Fernando', 'Alan', 'Juan Carlos Salazar', 'Emilia'];
console.log(longestString(strArray));