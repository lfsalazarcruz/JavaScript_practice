// QUEUES DATA STRUCTURE

// A queue is a list or collection with the restriction that insertion can be performed t
// one end(rear) and deletion can be performed at the other end(front)

// To enqueue into a queue, simply use the method push. Enqueue method uses push
// To dequeue from a queue, simply use the method shift. Dequeue method uses shift

// ======== Easy way to implement a queue ==========
var queue = [];

queue.push("A");
console.log(queue);
queue.push("B");
queue.push("C");
console.log(queue);

queue.shift();
console.log(queue);
queue.shift();
console.log(queue);
queue.shift();
console.log(queue);

// ======== Queue implementation using a class ========
class Queue {
  constructor(size) {
    this.storage = [];
    this.size = size;
    this.pointer = 0;
  }

  enqueue(item) {
    if (this.pointer < this.size) {
      this.storage.push(item);
      this.pointer++;
    } else if (this.pointer === this.size) {
      console.log("Storage full! Cannot enqueue item!");
    }
  }

  dequeue() {
    this.storage.shift();
    this.pointer--;
  }

  peek() {
    console.log(this.storage[0]);
  }

  isEmpty() {
    if (this.storage.length > 0) {
      console.log("Is not empty");
    } else {
      console.log("Yes, it is empty");
    }
  }

  isFull() {
    if (this.pointer === this.size) {
      console.log("It is full");
    } else if (this.pointer < this.size) {
      console.log("Not full");
    }
  }

  returnQueue() {
    return this.storage;
  }
}

var myQueue = new Queue(3);
console.log(myQueue.storage);
myQueue.enqueue("A");
myQueue.peek();
myQueue.enqueue("B");
console.log(myQueue.storage);
myQueue.dequeue();
console.log(myQueue.storage);
myQueue.enqueue("B");
console.log(myQueue.storage);
