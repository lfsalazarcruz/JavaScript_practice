// QUEUES DATA STRUCTURE

// A queue is a list or collection with the restriction that insertion can be performed t
// one end(rear) and deletion can be performed at the other end(front)

// To enqueue into a queue, simply use the method push. Enqueue method uses push
// To dequeue from a queue, simply use the method shift. Dequeue method uses shift

// Easy way to implement a queue

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

// Queue implementation using a class
class Queue {
  constructor() {
    this.storage = [];
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    this.storage.shift();
  }

  returnQueue() {
    return this.storage;
  }
}

var myQueue = new Queue();
console.log(myQueue.storage);
myQueue.enqueue("A");
myQueue.enqueue("B");
console.log(myQueue.storage);
myQueue.dequeue();
console.log(myQueue.storage);
