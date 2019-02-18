// A stack is an abstract data type  with a bounded(predefined) capacity.
// It is a simple data structure that allows adding and removing elements
// in a particular order. Every time an element is added, it goes on the top of
// the stack and the only element that can be removed is the element that is
// at the top of the stack, just like a pile of objects.

// Last in first out LIFO

//  Stack storage
var stack = [];

// Using unshift method to insert a value on top of the stack
stack.unshift("A");
console.log(stack);
stack.unshift("B");
stack.unshift("C");
console.log(stack);

// Using shift method to delete the element on top of the stack
stack.shift();
stack.shift();
console.log(stack);

// Implementation of a stack creating a stack object
class Stack {
  constructor(size) {
    this.storage = [];
    this.size = size;
    this.current = 0;
  }
  push(item) {
    if (this.size === this.current) {
      console.log("Stack storage is full!");
      return false;
    } else {
      this.storage.unshift(item);
      this.current++;
    }
  }
  pop() {
    if (this.current > 0) {
      this.storage.shift();
      this.current--;
    } else if (this.current === 0 && this.storage.length === 0) {
      console.log("The stack is empty!");
      return false;
    }
  }
  peek() {
    if (this.storage.length > 0) {
      return this.storage[0];
    } else {
      console.log("Stack is empty");
      return false;
    }
  }
  isEmpty() {
    if (this.storage.length === 0) {
      console.log("Stack is empty");
      return false;
    } else {
      console.log("Stack not empty: ", this.storage);
      return this.storage;
    }
  }
  stackValues() {
    return this.storage;
  }
}

var myStack = new Stack();
console.log(myStack);
myStack.push("A");
myStack.push("B");
myStack.push("C");
console.log(myStack.storage);
myStack.pop();
myStack.stackValues();
