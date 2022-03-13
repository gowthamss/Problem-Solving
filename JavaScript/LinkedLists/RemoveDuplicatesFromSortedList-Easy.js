//// Problem Statement

// Given a sorted linked list, delete all duplicates such that each element appear only once.



// Problem Constraints

// 0 <= length of linked list <= 106



// Input Format

// First argument is the head pointer of the linked list.



// Output Format

// Return the head pointer of the linked list after removing all duplicates.



// Example Input

// Input 1:

//  1->1->2
// Input 2:

//  1->1->2->3->3


// Example Output

// Output 1:

//  1->2
// Output 2:

//  1->2->3


// Example Explanation

// Explanation 1:

//  Each element appear only once in 1->2.


//// Solution


var removeDuplicatedFromSortedList = (A) => {
    let prev = A;

    // If there is only one node, return it
    if (prev.next === null) {
        return prev;
    }

    // Otherwise, have two points and compare both of them for equality
    let current = prev.next;

    // Iterate till end of the list
    while (current !== null) {
        // If both the pointers data is same then move the current pointer
        if (prev.data === current.data) {
            current = current.next;
            prev.next = current;
        } else {
            // Else update both the pointers
            prev = current;
            current = current.next;
        }
    }
    return A;
}