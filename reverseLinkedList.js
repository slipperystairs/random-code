/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * Iterate through all nodes to traverse the list as long
 * as there is a node and do the following at each iteration:
 *  - Set current to head.next
 *  - Set head.next to previous
 *  - Set previous to head
 *  - Set head to current
 *  - Repeat for all the nodes
 *  - Return the previous pointer as the new head of
 *    reversed list.
 */
 var reverseList = function(head) {
  let current;
  let previous = null;
  while (head != null) {
    current = head.next;
    head.next = previous;
    previous = head;
    head = current;
  }
  return previous;
};
