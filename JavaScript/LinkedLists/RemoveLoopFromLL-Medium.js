//// Problem Statement

// Given a linked list which contains some loop.

// You need to find the node, which creates a loop, and break it by making the node point to NULL.



// Problem Constraints

// 1 <= number of nodes <= 1000



// Input Format

// Only argument is the head of the linked list.



// Output Format

// return the head of the updated linked list.



// Example Input

// Input 1:


// 1 -> 2
// ^    |
// | - - 
// Input 2:

// 3 -> 2 -> 4 -> 5 -> 6
//           ^         |
//           |         |    
//           - - - - - -


// Example Output

// Output 1:

//  1 -> 2 -> NULL
// Output 2:

//  3 -> 2 -> 4 -> 5 -> 6 -> NULL


// Example Explanation

// Explanation 1:

//  Chain of 1->2 is broken.
// Explanation 2:

//  Chain of 4->6 is broken.


//// Solution - Using slow and fast pointers


var removeLoopFromLL = A => {
    // Have slow and fast pointers which move at 1v and 2v respectively
    let slow = A;
    let fast = A;
    let count = 0;
    let prev = null;

    while (count < 2) {
        slow = slow.next;
        // When they meet for the first time, store fast into prev to make it null when they meet for the second time
        if (count === 1) {
            prev = fast;
            fast = fast.next;
        } else {
            fast = fast.next.next;
        }

        // If they both are equal increment count and reset the slow pointer to A
        if (slow === fast) {
            count++;
            // If count is 2 then point prev to null and return A
            if (count === 2) {
                prev.next = null;
                return A;
            }
            slow = A;
        }
    }
}