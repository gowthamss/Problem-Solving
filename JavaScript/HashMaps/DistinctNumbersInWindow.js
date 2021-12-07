// Problem Statement:
// You are given an array of N integers, A1, A2 ,…, AN and an integer B. Return the of count of distinct numbers in all windows of size B.

// Formally, return an array of size N-B+1 where i'th element in this array contains number of distinct elements in sequence Ai, Ai+1 ,..., Ai+B-1.

// NOTE: if B > N, return an empty array

// Input 1:

//  A = [1, 2, 1, 3, 4, 3]
//  B = 3
// Input 2:

//  A = [1, 1, 2, 2]
//  B = 1

//// Approach
// 1. Iterate through input array for the first B sized window and compute distinct element by storing them in HashMap.
// 2. Take the size of the HashMap and push it to result array.
// 3. Next, start iterating from k'th element of the array. 
// 4. Increment the frequency of the k'th element if it already exists, else store it in the HashMap with frequency 1.
// 5. And decrement the frequency of A[i-B] element(which is the element before the new window).
// 6. If the frequency of A[i-B] becomes 0 after decrementing, then remove it from the HashMap.
// 7. Now take the size of the HashMap again and push it into the result array.
// 8. Return result.

var dNums = (A, B) => {
    // If B > A.length, then we can't compute distinct values in size B, so return [].
    if (B > A.length) return [];

    let distinct = [];
    let lookup = new Map();
    let count = 0;

    // 1
    for (let i = 0; i < B; i++) {
        let val = A[i];
        if (lookup.get(val)) {
            lookup.set(val, lookup.get(val) + 1);
        } else {
            lookup.set(val, 1);
        }
    }
    // 2
    count = lookup.size;
    distinct.push(count);

    // 3
    for (let j = B; j < A.length; j++) {
        let val = A[j];

        // 4
        if (lookup.get(val)) {
            lookup.set(val, lookup.get(val) + 1);
        } else {
            lookup.set(val, 1);
        }

        // 5
        let prev = A[j - B];
        lookup.set(prev, lookup.get(prev) - 1);

        // 6
        if (lookup.get(prev) === 0) {
            lookup.delete(prev);
        }

        // 7
        count = lookup.size;
        distinct.push(count);
    }

    // 8
    return distinct;
}

console.log(dNums([1, 2, 1, 3, 4, 3], 3));
console.log(dNums([1, 1, 2, 2], 1));