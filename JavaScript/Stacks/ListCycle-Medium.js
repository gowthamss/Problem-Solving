//// Problem Statement

// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// Try solving it using constant additional space.

// Example:

// Input: 

//                   ______
//                  |     |
//                  \/    |
//         1 -> 2 -> 3 -> 4

// Return the node corresponding to node 3. 


//// Solution - Use two pointer slow and fast.

// 1. When they meet for the first time, reset slow pointer to A.
// 2. When they meet the second time return slow or fast.

var listCycle = A => {
    if (!A || !A.next) return null;

    let slow = A;
    let fast = A;
    let isCycle = false;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            slow = A;
            isCycle = true;
            break;
        }
    }

    if (!isCycle) return null;

    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}