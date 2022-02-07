//// Problem Statement

// Write a recursive function that, given a string S, prints the characters of S in reverse order.


//// Solution - TC: O(N), SC: O(N)

var solve = (A) => {
    let count = A.length - 1;

    let res = reverse(count, A);
    return res;
}

var reverse = (c, A) => {
    if (c === 0) return A[c];

    return A[c] + reverse(c - 1, A);
}

console.log(solve('cool'));
console.log(solve('scaleracademy'));