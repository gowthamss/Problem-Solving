// Akash likes playing with strings. One day he thought of applying following operations on the string in the given order:

// Concatenate the string with itself.
// Delete all the uppercase letters.
// Replace each vowel with '#'.
// You are given a string A of size N consisting of lowercase and uppercase alphabets. Return the resultant string after applying the above operations.

// NOTE: 'a' , 'e' , 'i' , 'o' , 'u' are defined as vowels.

// Ex:
// Input: A="AbcaZeoB"
// Output: "bc###bc###"

// Solution 1
var stringOperations = (A) => {
    // Concatenate A to itself
    A += A;

    // Make an array out of A
    let strArr = Array.from(A);
    let removeCapsStr = [];

    // Loop throught array of characters and remove capital letters
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i] >= 'A' && strArr[i] <= 'Z') {
            continue;
        } else {
            removeCapsStr.push(strArr[i]);
        }
    }

    // Replace vowels with #
    for (let j = 0; j < removeCapsStr.length; j++) {
        if (removeCapsStr[j] === 'a' ||
            removeCapsStr[j] === 'e' ||
            removeCapsStr[j] === 'i' ||
            removeCapsStr[j] === 'o' ||
            removeCapsStr[j] === 'u'
        ) {
            removeCapsStr[j] = '#';
        }
    }

    return removeCapsStr.join('');
}

console.log(stringOperations('hgUe'));