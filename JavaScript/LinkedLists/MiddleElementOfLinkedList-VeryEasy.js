//// Problem Statement

// Given a linked list of integers. Find and return the middle element of the linked list.

// NOTE: If there are N nodes in the linked list and N is even then return the (N/2 + 1)th element.



// Problem Constraints

// 1 <= length of the linked list <= 100000

// 1 <= Node value <= 109



// Input Format

// The only argument given head pointer of linked list.



// Output Format

// Return the middle element of the linked list.



// Example Input

// Input 1:

//  1 -> 2 -> 3 -> 4 -> 5
// Input 2:

//  1 -> 5 -> 6 -> 2 -> 3 -> 4


// Example Output

// Output 1:

//  3
// Output 2:

//  2


//// Solution - TC: O(N), SC: O(1)
// 1. Find the total number of nodes in LL.
// 2. Compute the middle element index and find the element.

var middleElementOfLinkedList = (A) => {
    let count = 0;
    let temp = A;

    // Count number of nodes
    while (temp !== null) {
        count++;
        temp = temp.next;
    }

    let k = count % 2 === 0 ? count / 2 : Math.floor(count / 2);

    temp = A;

    // Finf the k'th node
    while (k > 0) {
        temp = temp.next;
        k--;
    }

    return temp.data;
}