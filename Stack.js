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
