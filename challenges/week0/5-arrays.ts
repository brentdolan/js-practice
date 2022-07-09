/*
Numbers aren't too complicated - they're numbers in the same sense you'd expect.
Some languages distinguish between Integer and Float (decimal) numbers, but Javascript
does not.

Fill in the answers based on the description using the most relevant method for
the Number datatype.
*/

// 1. Add a number to this array
export const firstQuestion: number[] = [1, 2, 3];
// do something here to add the value
export const firstAnswer: number[] = [...firstQuestion];
firstAnswer.push(4) // replace this value
export const firstMethod: string = "push"; // fill in the name of the method you used

// 2. Set the questionTwo variable to the last item in the array `firstQuestion`
export const secondAnswer: number = firstQuestion.at(-1); // replace this value
export const secondMethod: string = "at"; // fill in the name of the method you used

// 3. Set the value of `combinedList` to a new array that combines the array `firstQuestion` and the following array `thirdQuestion`.
export const thirdQuestion: number[] = [10, 11, 12];
export const thirdAnswer: number[] = firstQuestion.concat(thirdQuestion); // replace this value
export const thirdMethod: string = "concat"; // fill in the name of the method you used

// 4. Combine the items into a string with each word separated by a space using a built-in array method
export const fourthQuestion: string[] = ["Arrays", "are", "cool"];
export const fourthAnswer: string = fourthQuestion.join(' ');
export const fourthMethod: string = "join";




// run this script to see what your answers are
console.log(`firstAnswer: ${firstAnswer}`);
console.log(`secondAnswer: ${secondAnswer}`);
console.log(`thirdAnswer: ${thirdAnswer}`);
console.log(`fourthAnswer: ${fourthAnswer}`);
