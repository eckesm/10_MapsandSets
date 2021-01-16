/* ********************************************** 
---------- Maps and Sets Exercise ---------------
********************************************** */

// ----- Quick Question #1 -----
/* What does the following code return?
new Set([1,1,2,2,3,4])     */
// ANSWER ---> [1,2,3,4]

// ----- Quick Question #2 -----
/* What does the following code return?
[...new Set("referee")].join("")      */
// ANSWER ---> 'referee'   WRONG
// SOLUTION ---> 'ref'   I forgot to remove the duplicate letters

// ----- Quick Questions #3
/* What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);     */
// ANSWER ---> [[1,2,3],false]   WRONG
/*  SOLUTION --->
0: {Array(3) => true}
1: {Array(3) => false}   BECAUSE the arrays are not the same */

// ______________________________________________

// ----- hasDuplicate -----
/* Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false     */

// const hasDuplicate=(arr)=> {
//   if (arr.length !== new setInterval([...arr]).size){
//     return true
//   } else {
//     return false
//   }
// }

// const hasDuplicate = arr => arr.length !== new Set([ ...arr ]).size ? true : false;     <--- my original method

const hasDuplicate = arr => arr.length !== new Set([ ...arr ]).size; // <--- incorporating suggested soltion (don't need the true/false)

// ----- vowelCount -----
/* Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }     */

// my original method
// const vowelCount = str => {
// 	const vowelArr = [ ...str ];
//   const vowelMap = new Map();
//   const vowels ="aeiou"
// 	vowelArr.forEach(char => {
//     if (vowels.includes(char)) {
//       if (vowelMap.has(char)) {
//         vowelMap.set(char, vowelMap.get(char) + 1);
//       } else {
//         vowelMap.set(char, 1);
//       }
//     }
// 	});
// 	return vowelMap;
// };

// incorporating suggested solutions
const vowelCount = str => {
	const vowelMap = new Map();
	const vowels = 'aeiou';

	for (let char of str) {
		let lowerCaseChar = char.toLowerCase();
		if (vowels.includes(lowerCaseChar)) {
			if (vowelMap.has(lowerCaseChar)) {
				vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
			} else {
				vowelMap.set(lowerCaseChar, 1);
			}
		}
	}
	return vowelMap;
};
