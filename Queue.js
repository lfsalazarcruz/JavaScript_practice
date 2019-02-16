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
console.log(queue);
queue.push("C");
console.log(queue);

queue.shift();
console.log(queue);
queue.shift();
console.log(queue);
queue.shift();
console.log(queue);
