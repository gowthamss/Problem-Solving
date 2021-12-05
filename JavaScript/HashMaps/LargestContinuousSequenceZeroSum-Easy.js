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

    // If there is no such subarray which sum is equal to 0, then check if there is any '0' in the array, which can be a subarray itself.
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


//// Solution 2 - Using Prefix sum and Hashing - TC: O(n) - SC: O(n)
var largestContinuousSequenceZeroSum = (A) => {
    let res = [],
        start = 0,
        end = 0,
        max = Number.MIN_SAFE_INTEGER,
        lookup = {},
        cumulative = 0;;

    // Iterate over input array and calculate cumulative sum(prefix sum)
    for (let i = 0; i < A.length; i++) {
        cumulative += A[i];

        // If at any point, the cumulative sum is 0 then we can say that we have seen a subarray with sum 0
        // So, update start and end pointers and max as well
        if (cumulative === 0) {
            start = -1;
            end = i;
            max = i + 1;
        } else {
            //// Else, check if any key in the hashmap already exists
            if (lookup[cumulative] >= 0) {
                // if that already exists then we can take diff of the index stored for that key and the current index in the loop
                let currentIndex = lookup[cumulative];
                let diff = i - currentIndex;

                // if that diff is greater than the current max, then we can say it is the largest sequence so far, and update start, end and max accordingly
                if (diff > max) {
                    start = currentIndex;
                    end = i;
                    max = diff;
                }
            } else {
                // else store the index at that key
                lookup[cumulative] = i;
            }
        }
    }

    // After the above loop, we will have the start and end pointers with the max distance
    // So, iterate with them on input array and append each element to result
    for (let i = start + 1; i <= end; i++) {
        res.push(A[i]);
    }
    return res;
}



console.log(largestContinuousSequenceZeroSum());