class Queue {
  constructor() {
    this.items = [];
  }

  // Enqueue: Add item to the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Dequeue: remove the first item from the queue
  dequeue(element) {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    return this.items.shift();
  }

  // Peek: see the first item without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty!";
    }
    return this.items[0];
  }

  // isEmpty: check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // size: size of the queue
  size() {
    return this.items.length;
  }
}

// Lets create a new queue and see how it works

const iceCreamQueue = new Queue();

//people join the queue (enqueue)
iceCreamQueue.enqueue("Ajay");
iceCreamQueue.enqueue("Sara");
iceCreamQueue.enqueue("John");

console.log("iceCreamQueue.items", iceCreamQueue.items);
