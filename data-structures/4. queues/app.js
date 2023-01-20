// Qeues are also abstract data structure.
// Queues abide by FIFO principle (first in, first out - The first element added to the queue will be the first element removed from the queue)
// Queues are used to monitor background tasks, uploading resources, Print/Task Processing

//Array implementation of a queue: using only push and shift to store and access data (the first added data is removed first) OR using only unshift and pop. Both cases are not ideal as we there is re-indexing of the whole array when a new item is added/removed from the beginning. Here it is paramount we implement our own queue from start if performance is a concern
const queue = [];
queue.push("FIRST");
queue.push("SECOND");
queue.push("THIRD");
console.log(queue.shift()); //"FIRST"
queue.shift(); //"SECOND"
queue.shift(); //"THIRD"

//Creating our own queue: Linked list implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null; //first is the firstNode to be removed from the queue. That is, the first item added to the queue (to the end of the list) [FIFO]
    this.last = null; //last is the lastNode to be removed from the queue. It is the last item added to the queue
    this.size = 0;
  }

  enqueue(val) {
    //push --> Add new items to the the end of the list
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    //shift --> remove from the begining of the list(the item at the begining of the list is the first item added and it is the first item out i.e FIFO)
    if (!this.first) return undefined;
    const currentFirst = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      currentFirst.next = null;
    }
    this.size--;
    return currentFirst.value;
  }
}

const myQueue = new Queue();
myQueue.enqueue(2);
myQueue.enqueue(4);
myQueue.enqueue(6);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue);
