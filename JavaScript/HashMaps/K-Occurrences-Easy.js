// Groot has N trees lined up in front of him where the height of the i'th tree is denoted by H[i].
// He wants to select some trees to replace his broken branches.
// But he wants uniformity in his selection of trees.
// So he picks only those trees whose heights have frequency K.
// He then sums up the heights that occur K times. (He adds the height only once to the sum and not K times).

// Ex:
// N=5 ,K=2 ,A=[1 2 2 3 3]
// Output = 5

// Explanation:
// There are 3 distinct numbers in the array which are 1,2,3.
// Out of these, only 2 and 3 occur twice. Therefore the answer is sum of 2 and 3 which is 5.

// Solution 1 - Using Hashing - TC: O(n) - SC: O(n)

var kOccurrences = (A, B, C) => {
    let sum = 0;
    let lookup = {};
    let flag = false;

    for (let val of C) {
        if (lookup[val]) {
            lookup[val] += 1;
        } else {
            lookup[val] = 1;
        }
    }

    let vals = Object.keys(lookup);

    for (let i = 0; i < vals.length; i++) {
        if (lookup[vals[i]] === B) {
            sum += Number(vals[i]);
            flag = true;
        }
    }
    return flag ? sum : -1;
};

console.log(kOccurrences(5, 2, [1, 2, 2, 3, 3]));
console.log(kOccurrences(5, 5, [1, 2, 3, 4, 5]));