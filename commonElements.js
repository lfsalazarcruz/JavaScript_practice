// Good morning! Write a function called commonElements that has parameters for two arrays.  
// Return an array of all items that are present in both arrays.  Do not modify the arrays that are passed in.

//  Input Example:  

// [1, 2, 3, 4] [3, 4, 5, 6]
// ['a', 'b', 'c'] ['x', 'y', 'z', 'a']
// [1, 2, 3] [4, 5, 6]

// Output Example:  

// [3, 4]
// ['a']
// []

// SOLUTION 1

function commonElements(arr1, arr2) {
    let resultArray = [];

    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                resultArray.push(arr1[i]);
                console.log(resultArray);
            }
        }
    }
    return resultArray;
}

console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6]));
console.log(commonElements(['a', 'b', 'c'], ['x', 'y', 'z', 'a']));
console.log(commonElements([1, 2, 3], [4, 5, 6]));


// SOLUTION 2

// function commonElements(arr1, arr2) {
//     let newArr = [];
//     arr1.forEach((e1)=>arr2.forEach((e2)=>{
//         if(e1 === e2){
//             newArr.push(e1);
//         }
//     }));
//     return newArr;
// }