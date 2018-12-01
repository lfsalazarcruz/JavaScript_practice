// Good morning! Write a function that takes in a string, reverses the 'casing' of 
// that string, and returns the "reversed-casing" string.

// const string = 'HELLO world!';
// console.log(reverseCase(string)); // <--- hello WORLD!

// SOLUTION 1

function reverseCase(str) {

    let newString = '';

    for (i = 0; i < str.length; i++) {
        console.log(str[i])
        if (str[i] === str[i].toUpperCase()) {
            console.log(str[i].toUpperCase())
            newString = newString.concat(str[i].toLowerCase());
        } else if (str[i] === str[i].toLowerCase()) {
            console.log(str[i]);
            newString = newString.concat(str[i].toUpperCase());
        } else {
            newString = newString.concat(str[i]);
        }
    }
    return newString;
}

console.log(reverseCase('Por FAvor ven por LA ROPA'));
console.log(reverseCase('Por FAvor v###en por LA ROP*A'));


// SOLUTION 2
// function reverseCase(str) {
//   let splitStr = str.split("");
//   for (let i = 0; i < str.length; i++)
//     if (str[i] === str[i].toUpperCase()) {
//       splitStr[i] = str[i].toLowerCase();
//     } else if (str[i] === str[i].toLowerCase()){
//       splitStr[i] = str[i].toUpperCase();
//     }
//     splitStr = splitStr.join('');
//     return splitStr;
// }