/** Question
 * 1. What are the differences between mutating array methods and non-mutation array methods in JavaScript.
 * List 5 array methods that fall under each of them.
 * 
 * Answers
 *  JavaScript offers a lot of ways to add, remove or replace items in an array and some of them mutate the array while some does not.
 * Mutating Array Methods: Are methods that changes the array itself instead of returning a new array with the new changes(it changes the original array).
 * 
 * Examples
 * 1. array.pop()
 * 2. array.splice()
 * 3. array.push()
 * 4. array.shift()
 * 5. array.unshift()
 * 
 * Non-mutating array Method: Are methods that returns the whole new array with all the changes
 * 
 * Examples
 * 1. array.slice()
 * 2. array.includes()
 * 3. array.indexOf()
 * 4. array.concat()
 * 5. array.join()
 */

// 2. Here is an array of languages: [‘C#’, ‘JavaScript’, ‘Ruby’, ‘PHP’, ‘Python’]. Perform this operation on them 

let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python'];

// Add ‘Kotlin’ to the end of the array
languages.splice(languages.length, 0, 'Kotlin');
console.log(languages);

// Add ‘Java’ after ‘Ruby’
languages.splice(3, 0, 'Java');
console.log(languages);

// Remove the first item in the array
languages.splice(0, 1);
console.log(languages);

// Add ’Scala’ and ‘Swift’ to the beginning of the array
languages.splice(0, 0, 'Scala', 'Swift');
console.log(languages);

// Replace ‘PHP’ with ‘Go’ and ‘Rust’
languages.splice(5, 1, 'Go', 'Rust');
console.log(languages);

console.log(`List the available languages are: ${languages}`);


// 3. What will be the value of fruit after calling the function changeFruit?
let fruit = ['apple', 'mango', 'banana'];
		function changeFruit(fruit) {
    			fruit[2] = 'orange';
    			return fruit;
		};
    console.log(changeFruit(fruit));

// 4. Write a function that accepts an array of numbers as an argument. Return the maximum value in the array.
// e.g., max([4, 5, 10, -2]) // maximum value is 10

// function max(numbers) {
// 	return Math.max(...numbers);
// }
// console.log(max([2, 4, 6, 8]));

let maxNumbers = function(numbers) {
	return Math.max(...numbers);
};

console.log(maxNumbers([2, 4, 6, 8, 10]));

// 5. Write a function called valTimesIndex which accepts an array of numbers and returns a new array with each value multiplied by the index it is at in the array:
// e.g valTimesIndex([1,2,3]) // [0,2,6]
//  	valTimesIndex([5,10,15]) // [0,10,30]

function valTimesIndex(array) {
	result = array.map((value, index) => value * index );
	return result;
};

console.log(valTimesIndex([1, 2, 3]));