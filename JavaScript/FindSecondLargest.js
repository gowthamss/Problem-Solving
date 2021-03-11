function findSecondLargest(arr) {
    let largest = 0,
        second = 0;

    // Corner Cases
    if (arr.length === 0 || arr.length === 1) return `Array should have minimum 2 items to find second largest.`

    // Start with two values - first largest and second largest
    if (arr[0] > arr[1]) {
        largest = arr[0];
        second = arr[1];
    } else {
        largest = arr[1];
        second = arr[0];
    }

    // Iterate through the array to find first and second in the entire array
    for (let i = 2; i < arr.length; i++) {
        // Check whether array element is larger than the largest        
        if (arr[i] > largest) {
            // If true largest will be current array item and the second will be largest
            second = largest;
            largest = arr[i];
        } else if (arr[i] > second) {
            // If true this will be the second largest
            second = arr[i];
        }
    }

    return `The first largest is ${largest} and the second largest is ${second}.`
}

console.log(findSecondLargest([12, 35, 1, 10, 34, 1]));
console.log(findSecondLargest([12]));