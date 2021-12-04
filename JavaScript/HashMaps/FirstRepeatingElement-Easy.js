// Given an integer array A of size N, find the first repeating element in it.
// We need to find the element that occurs more than once and whose index of first occurrence is smallest.
// If there is no repeating element, return -1.

//// Brute Force - // TC: O(n^2) // SC: O(1)
// Check each element with all the other elements in the array.
// If in the process you encouter the same element then return the element.
var firstRepeating = A => {
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] === A[j]) {
                return A[i];
            }
        }
    }
    return -1;
}


//// Using Hasing - // TC: O(n) // SC: O(1)
// Store all the elements with their frequency in the HashMap.
// Then iterate over the input array and check in the HashMap if the frequency of that element is greater than 1.
var firstRepeating = A => {

    let lookup = {}; // JS Map can also be used here.

    // Iterate over input array and store the frequency
    for (let val of A) {
        if (lookup[val]) {
            lookup[val] += 1;
        } else {
            lookup[val] = 1;
        }
    }

    // Iterate again on input array to check each element's frequency
    for (let val of A) {
        if (lookup[val] > 1) {
            return val;
        }
    }
    return -1;
}

console.log(firstRepeating([10, 5, 3, 4, 3, 5, 6]));