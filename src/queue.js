const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.frontIndex = null;
    this.backIndex = null;
  }

  getUnderlyingList() {
    return this.frontIndex;
    // remove line with error and write your code here
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    if (this.backIndex) {
      this.backIndex.next = newNode;
    }
    this.backIndex = newNode;
    if (!this.frontIndex) {
      this.frontIndex = newNode;
    }
    // remove line with error and write your code here
  }

  dequeue() {
    if (!this.frontIndex) {
      return null;
    }
    const dequeuedValue = this.frontIndex.value;
    this.frontIndex = this.frontIndex.next;
    if (!this.frontIndex) {
      this.backIndex = null;
    }
    return dequeuedValue;
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
