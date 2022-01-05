//// Problem Statement
// Little Ponny is given a string A and he wants to find out the lexicographically minimum subsequence from it of size >= 2. Can you help him?

// A string a is lexicographically smaller than a string b, 
// if the first different letter in a and b is smaller in a. 
// For example, "abc" is lexicographically smaller than "acc" because the first different letter is 'b' and 'c' which is smaller in "abc".

// Ex:
// Input 1:

//  A = "abcdsfhjagj" 
// Input 2:

//  A = "ksdjgha"

// Output 1:

//  "aa" 
// Output 2:

//  "da"

//// Approach
// Step 1: Traverse through string but till length - 1 as we at least need 2 characters and find the smallest character. For example: in "exyacxeb" smallest is a and it's index is 3.
// Step 2: Traverse through the string again but starting from index 3 as we can't go backward to find the subsequence. For "exyacxeb", we start from index 3 i.e. a and check each character to find the smallest character, here it's 'b'
// Step 3. add the second character to the first character and return it.

var littlePonyAnd2Subsequence = (A) => {
    let firstChar = '',
        secondChar = '',
        maxCharCode = Number.MAX_SAFE_INTEGER,
        firstIndex = 0;

    for (let i = 0; i < A.length - 1; i++) {
        let charCode = A[i].charCodeAt(0);
        if (charCode < maxCharCode) {
            maxCharCode = charCode;
            firstChar = A[i];
            firstIndex = i;
        }
    }
    maxCharCode = Number.MAX_SAFE_INTEGER;
    for (let j = firstIndex + 1; j < A.length; j++) {
        let charCode = A[j].charCodeAt(0);

        if (charCode < maxCharCode) {
            secondChar = A[j];
            maxCharCode = charCode;
        }
    }
    return firstChar + secondChar;
}

console.log(littlePonyAnd2Subsequence('abcdsfhjagj'));
console.log(littlePonyAnd2Subsequence('ksdjgha'));