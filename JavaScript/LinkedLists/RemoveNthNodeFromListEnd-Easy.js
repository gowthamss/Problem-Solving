//// Problem Statement

// Given a linked list A, remove the B-th node from the end of list and return its head.

// For example, Given linked list: 1->2->3->4->5, and B = 2. After removing the second node from the end, the linked list becomes 1->2->3->5.

// NOTE: If B is greater than the size of the list, remove the first node of the list.

// NOTE: Try doing it using constant additional space.



// Problem Constraints

// 1 <= |A| <= 106



// Input Format

// The first argument of input contains a pointer to the head of the linked list.

// The second argument of input contains the integer B.



// Output Format

// Return the head of the linked list after deleting the B-th element from the end.



// Example Input

// Input 1:

// A = [1, 2, 3, 4, 5]
// B = 2
// Input 2:

// A = [1]
// B = 1


// Example Output

// Output 1:

// [1, 2, 3, 5]
// Output 2:

//  [] 


// Example Explanation

// Explanation 1:

// In the first example, 4 is the second last element.
// Explanation 2:

// In the second example, 1 is the first and the last element.


//// Solution

// 1. Count the number of nodes
// 2. Calculate difference of count and B and iterate over LL to get to the previous node


var removeNthFromEnd = (A, B) => {
    let count = 0;
    let temp = A;

    // Count the number of nodes
    while (temp) {
        count++;
        temp = temp.next;
    }

    if (count === 0) return;

    // Calculate diff of count and B
    let k = count - B;

    // Delete the first node if any of these conditions met
    if (count === 1 || B > count || k === 0) {
        A = A.next;
        return A;
    }

    let current = A;

    // Else find the previous node and delete
    while (--k) {
        current = current.next;
    }
    current.next = current.next.next;

    return A;
}