// Question 1
// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]


arr1 = [3, 7, 34, 90, 12];
arr2 = [true, "green", "where", 12, 56];

let array = arr1[arr1.length - 1];
console.log(array)

let array1 = arr2[arr2.length - 1];
console.log(array1)


// Question 2
// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Bird", "Snake", "Dog"];

myPets = ["Cow", "Bird", "Snake", "Dog"];
let petsArrays = myPets.join();
console.log(petsArrays);


// Question 3
// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];

var arr3 = [-5, 9, 5, 3, 2, -3, 6, 8, 4, 1];
arr3.sort();
console.log(arr3);


// Question 4
// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];

var arr = ["apple", "mango", "apple", "orange", "mango", "mango", "mango"];
function removeDuplicate(arr){
    return(arr.filter((item, index)=>arr.indexOf(item)===index)); 
}

function duplicateOnly(arr){
    return(arr.filter((item, index)=>arr.indexOf(item) !== index));
}

console.log(removeDuplicate(arr));
console.log(duplicateOnly(arr));


// Question 5
// Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4];

let arr5 = ["the", "way", "x",4];
if (arr5[1]==["way"]){
    console.log("way")
}
else{
    (arr5[1]!=["way"])
        console.log("The search word was not found!")
}




// Question 6
// Write a JS script to sort the following string
// let word = "sevink"

let word = "sevink"
 let arr7=(word)=>{
return word .split("").sort().join("");
 };
 console.log(arr7("sevink"))