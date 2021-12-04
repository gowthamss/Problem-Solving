// Given a string A consisting of lowercase characters.
// Check if characters of the given string can be rearranged to form a palindrome.
// Return 1 if it is possible to rearrange the characters of the string A such that it becomes a palindrome else return 0.

// Ex:
// A = "abcde" -> 0
// A = "abbaee" -> 1

// Logic:
// 1. A palindrome cannot be formed if there are more than 1 odd number of characters.
// 2. A palidrome can only be formed if each and every character count in the string is even and/or only one odd count chracter present.
// 3. Otherwise it is not a palindrome.

// Soluton 1 - Using Hashing
var checkPalindrome = (A) => {
    let lookup = {};

    // Create a hashmap with frequency
    for (let val of A) {
        if (lookup[val]) {
            lookup[val] += 1;
        } else {
            lookup[val] = 1;
        }
    }

    let vals = Object.values(lookup);
    let count = 0;

    // Check for odd count of characters, if more than one found return 0 else return 1
    for (let val of vals) {
        if (val % 2 !== 0) {
            count++;
        }
        if (count > 1) {
            return 0;
        }
    }
    return 1;
};

console.log(checkPalindrome("abcde"));
console.log(checkPalindrome("abbaee"));