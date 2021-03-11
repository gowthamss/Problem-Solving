// Find the third distinct largest in the array.
// If no third maximum exist, return largest number.

var thirdMax = function(nums) {
    let first = 0,
        second = 0,
        third = 0

    let set = new Set(nums)
    nums = [...set]

    if (nums.length === 1) return nums[0]

    if (nums.length < 3) {
        if (nums[0] > nums[1]) return nums[0]
        else return nums[1]
    }

    if (nums[0] > nums[1]) {
        first = nums[0]
        second = nums[1]
    } else {
        first = nums[1]
        second = nums[0]
    }

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] > first) {
            second = first
            first = nums[i]
        } else if (nums[i] > second) {
            second = nums[i]
        }
    }

    third = Math.min(...nums)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < second && nums[i] > third) {
            third = nums[i]
        }
    }

    return third
};

console.log(thirdMax([12, 35, 1, 10, 34, 1]));
console.log(thirdMax([1, 1, 1]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([1, 1, 2]));
console.log(thirdMax([1, 2]));