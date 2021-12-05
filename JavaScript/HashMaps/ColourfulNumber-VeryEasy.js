// For Given Number A find if its COLORFUL number or not.

// If number A is a COLORFUL number return 1 else return 0.

// What is a COLORFUL Number:

// A number can be broken into different contiguous sub-subsequence parts. 
// Suppose, a number 3245 can be broken into parts like 3 2 4 5 32 24 45 324 245. 
// And this number is a COLORFUL number, since product of every digit of a contiguous subsequence is different.

// Ex: 
// 23 -> 1
// 236 -> 0

var colourfulNumber = (A) => {
    let combinations = [];
    let distinctProducts = new Set();

    // Make an array with all the digits in the given number
    while (A) {
        combinations.push(A % 10);
        A = Math.floor(A / 10);
    }

    // Loop throught the generated array and take product of each combination of digits
    for (let i = 0; i < combinations.length; i++) {
        let product = 1;
        for (let j = i; j < combinations.length; j++) {
            product *= combinations[j];

            // If the product is already present in the Set, then immediately return 0
            if (distinctProducts.has(product)) {
                return 0;
            }
            // Else store it in the Set
            distinctProducts.add(product);
        }
    }
    return 1;
}

console.log(colourfulNumber(23));
console.log(colourfulNumber(236));
console.log(colourfulNumber(3245));