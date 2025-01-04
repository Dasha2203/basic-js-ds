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

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.start) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
  }

  dequeue() {
    if (!this.start) {
      return;
    }
    const value = this.start.value;
    this.start = this.start.next;
    return value;
  }

  insertElement(node, data) {
    if (node.next === null) {
      return node.next = new ListNode(data)
    }

    return this.insertElement(node.next, data);
  }
}

module.exports = {
  Queue
};
