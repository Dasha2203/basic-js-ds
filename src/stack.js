/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push(element) {
    if (!this.stack) {
      this.stack = [element];
    } else {
      this.stack.push(element);
    }
  }

  pop() {
    if (this.stack.length) {
      return this.stack?.pop();
    }

    return;
  }

  peek() {
   return this.stack?.at(-1);
  }
}

module.exports = {
  Stack
};
