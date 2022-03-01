// Problem statement:
// Shaggy has an array A consisting of N elements. 
// We call a pair of distinct indices in that array as a special pair if elements at that index in the array are equal.

// Shaggy wants you to find a special pair such that distance between that pair is minimum. 
// Distance between two indices is defined as |i-j|.
// If there is no special pair in the array then return -1.

// Ex:
// A: [7, 1, 3, 4, 1, 7] -> 3
// A: [1, 1] -> 1


// Solution 1 - Brute Force - TC - O(n^2) - SC: O(1)
// This does not work for large inputs.
var shaggyAndDistances = (A) => {
    let minDist = Number.MAX_SAFE_INTEGER;

    // Loop through every possible element and store the minimum pair.
    for (let i = 0; i < A.length; i++) {
        for (let j = i + 1; j < A.length; j++) {
            if (A[i] === A[j]) {
                let diff = Math.abs(i - j);
                if (diff < minDist) {
                    minDist = diff;
                }
            }
        }
    }

    return minDist === Number.MAX_SAFE_INTEGER ? -1 : minDist;
}


// Solution 2 - Using HashMap - TC: O(n) - SC: O(n)
var shaggyAndDistances = (A) => {
    // Create a hashmap/object
    let lookup = {},
        minDist = Number.MAX_SAFE_INTEGER;

    // Iterate over given array
    for (let i = 0; i < A.length; i++) {
        // If an element already exists,
        if (lookup[A[i]] >= 0) {
            let currIndex = lookup[A[i]];
            // then take the diff of current index and the stored index value of that element.            
            let diff = i - currIndex;

            // check if the computed diff with minDist so far.
            // if it is less than minDist then update this diff as new minDist and also update the index of that element in hashmap for any duplicate of same element in the array.
            if (diff < minDist) {
                minDist = diff;
            }
            lookup[A[i]] = i;
        } else {
            // else store the index in hashmap. (Initial case when nothing is stored in hashmap)
            lookup[A[i]] = i;
        }
    }
    return minDist === Number.MAX_SAFE_INTEGER ? -1 : minDist;
}

console.log(shaggyAndDistances([7, 1, 3, 4, 1, 7]));
console.log(shaggyAndDistances([1, 1]));