// Given an array of integers. Every numbers appear twice except one. Write a function to find that number?

const arr = [2, 2, 1, 3, 3];
function findSingleNumber(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result ^= arr[i];
    }
    return result;
}
console.log(findSingleNumber(arr));

// Write a function that takes a string and checks if any word in it has duplicate letters.
const str = 'hello world';

function hasDuplicateLetters(str) {
    const words = str.split(' ');
    for (const word of words) {
        const wordSet = new Set(word);
        if(word.length !== wordSet.size) {
            return true;
        }
    }
    return false 
}
console.log(hasDuplicateLetters(str));