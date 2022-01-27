//// Problem Statement
// Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

// You may assume that the intervals were initially sorted according to their start times.

// Ex:
// Input 1:
// Given intervals [1, 3], [6, 9] insert and merge [2, 5] .

// Input 2:
// Given intervals [1, 3], [6, 9] insert and merge [2, 6]

// Output 1:
//  [ [1, 5], [6, 9] ]

// Output 2:
//  [ [1, 9] ]

var mergeIntervals = (intervals, new_interval) => {
    let res = [];
    console.log(intervals)
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < new_interval[0]) {
            res.push(intervals[i]);
        } else if (new_interval[1] < intervals[i][0]) {
            res.push(new_interval);
            for (let j = i; j < intervals.length; j++) {
                res.push(intervals[j]);
            }
            return res;
        } else {
            new_interval = [Math.min(intervals[i][0], new_interval[0]), Math.max(intervals[i][1], new_interval[1])]
        }
    }

    new_interval.sort((a, b) => a - b);
    res.push(new_interval);
    return res;
}