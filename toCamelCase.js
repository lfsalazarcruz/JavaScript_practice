// Good morning! Complete the function so that it converts dash-delimited 
// ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. 
// The first word within the output should be capitalized only if the original word was capitalized.

// toCamelCase("the-stealth-warrior")
//  returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior")
//  returns "TheStealthWarrior"

// SOLUTION 1

function toCamelCase(str) {

    let newString = '';

    for (i = 0; i < str.length; i++) {
        console.log(str[i]);
        if ((str[i] === '-' || str[i] === '_') && str[i+1] == str[i+1].toLowerCase()) {
            console.log(str[i]);
            console.log(str[i+1]);
            newString = newString.concat(str[i+1].toUpperCase());
            console.log(newString);
        }

        else if (str[i] !== '_' && str[i] !== '-') {
            console.log(str[i]);
            newString = newString.concat(str[i]);
        }
    }

    for (j = 0; j < newString.length; j++) {
        if(newString[j] === newString[j].toUpperCase() && newString[j].toLowerCase() === newString[j+1]) {
            console.log(newString[j+1]);
            newString = newString.split(newString[j+1]).join('');
            console.log(newString);
        }
    }
    return newString;
}

console.log(toCamelCase('the-stealth-warrior'));
console.log(toCamelCase('The_Stealth_Warrior'));


// SOLUTION 2
// function toCamelCase(str){
//   return str.replace(/(_|-)\w/g, function(m){return m[1].toUpperCase();});
// }