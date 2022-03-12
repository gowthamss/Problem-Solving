//// Problem Statement

// You are given a singly linked list having head node A. You have to reverse the linked list and return the head node of that reversed list.

// NOTE: You have to do it in-place and in one-pass.



// Problem Constraints

// 1 <= Length of linked list <= 105

// Value of each node is within the range of a 32-bit integer.



// Input Format

// First and only argument is a linked-list node A.



// Output Format

// Return a linked-list node denoting the head of the reversed linked list.



// Example Input

// Input 1:

//  A = 1 -> 2 -> 3 -> 4 -> 5 -> NULL 
// Input 2:

//  A = 3 -> NULL 


// Example Output

// Output 1:

//  5 -> 4 -> 3 -> 2 -> 1 -> NULL 
// Output 2:

//  3 -> NULL 


// Example Explanation

// Explanation 1:

//  The linked list has 5 nodes. After reversing them, the list becomes : 5 -> 4 -> 3 -> 2 -> 1 -> NULL 
// Expalantion 2:

//  The linked list consists of only a single node. After reversing it, the list becomes : 3 -> NULL


//// Solution
// 1. Remove the head node and append it to a new ref.
// 2. Continue this till we reach LL null.

var reverseLinkedList = A => {
    let h2 = null;
    let nextNode = A;

    while (nextNode !== null) {
        // Node to be removed from the original LL and added to reversed LL
        let temp = nextNode;
        // Before removal of temp, nextNode will have to hold the ref of further nodes(nodes after temp)
        nextNode = nextNode.next;
        // Add removed node to h2
        temp.next = h2;
        // Make h2 the head node of new LL
        h2 = temp;
    }

    return h2;
}