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
 */
 var reverseList = function(head) {
  let current;
  let previous = null;
  while (head != null) {
    current = head.next; // Set curr to the head
    head.next = previous; // head is set prev
    previous = head; // prev is now the head of the list
    head = current; // Head is now the current node.
  }
  return previous;
};
