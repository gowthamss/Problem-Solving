// Given an array A of N integers.
// Find the largest continuous sequence in a array which sums to zero.
// Return an interer array containing the elements which equals 0.

// Ex:
// A = [1,2,-2,4,-4]
// Output: [2,-2,4,-4]

//// Brute Force - TC: O(n^2)  - SC: O(n)
// This covers all edge cases but will not work for larger inputs
var largestContinuousSequenceZeroSum = (A) => {
    let res = [],
        start = 0,
        end = 0,
        max = 0;

    // Iterate through each element of array with other elements and find out if there is a subarray which sum equals 0.
    for (let i = 0; i < A.length; i++) {
        let sum = A[i];
        for (let j = i + 1; j < A.length; j++) {
            sum += A[j];
            if (sum === 0) {
                if (j - i + 1 > max) {
                    start = i;
                    end = j;
                    max = j - i + 1;
                }
            }
        }
    }

    // If there is no such subarray, then check if there is any '0' in the array, which can be a subarray itself.
    // If '0' exists then '0' is the answer.
    if (start === 0 && end === 0) {
        for (let i = 0; i < A.length; i++) {
            if (A[i] !== 0) {
                continue;
            } else {
                return [0];
            }
        }
        return [];
    }

    // If there is a subarray found in the first loops, then we would get start and end index accordingly.
    // So, iterate over input array from start till end and store the result in 'res'
    for (let k = start; k <= end; k++) {
        res.push(A[k]);
    }

    return res;
}

console.log(largestContinuousSequenceZeroSum());