class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 21, 12]; //we initialize the values with some values just for testing, should be []
  }

  insert(value) {
    //at best --> O(logn)
    this.values.push(value);
    //BUBBLE UP THE INSERTED VALUE TO ITS CORRECT POSITION
    let idx = this.values.length - 1;
    while (idx > 0) {
      const parentIndex = Math.floor((idx - 1) / 2);
      const parent = this.values[parentIndex];
      if (value <= parent) break;
      this.values[parentIndex] = value;
      this.values[idx] = parent;

      idx = parentIndex;
    }
    return this.values;
  }

  //search --> O(n)

  extractMax() {
    //at best --> O(logn)
    const arr = this.values;
    if (arr.length <= 0) return undefined;
    [arr[arr.length - 1], arr[0]] = [arr[0], arr[arr.length - 1]];
    const max = arr.pop();
    const length = this.values.length;

    let idx = 0;
    const element = this.values[0]; //the last element which is now the first element is gonna be sunk down to it's correct position in the array. The element is gonna be the same all through but it's position(index) changes
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null; //keeps track of the position to swap the element in the incorrect spot with. Can either be null, leftIndx or rightIdx

      if (leftChildIdx < length) {
        //check if leftChildIdx we wish to swap with is still in bound of the array
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        //check if rightChildIdx we wish to swap with is still in bound of the array
        rightChild = this.values[rightChildIdx];
        if (
          //we only wish to swap with right child if the leftChild is not greater than the element (i.e swap still null) OR the leftChild is greater than the element (swap no longer null) and the right child is greater than the left child
          (!swap && rightChild > element) ||
          (swap && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (!swap) break; //if no swap of the element with either left or right child then none are bigger than the parent and it is now in the correct position so we done

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
    return max;
  }
}

const MBH = new MaxBinaryHeap();
MBH.insert(55);
MBH.insert(1);
MBH.insert(45);
console.log(MBH.insert(199));
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.extractMax());
console.log(MBH.insert(199));

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority; //the lower priority value, the higher the priority of the node. So we bubble up and sink down based on this priority value
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);

    let idx = this.values.length - 1;
    while (idx > 0) {
      const parentIdx = Math.floor((idx - 1) / 2);
      const parentNode = this.values[parentIdx];
      if (priority >= parentNode.priority) break;
      this.values[parentIdx] = newNode;
      this.values[idx] = parentNode;

      idx = parentIdx;
    }

    return this.values;
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length <= 0) return end;
    this.values[0] = end;
    const length = this.values.length;

    let idx = 0;
    const node = this.values[0];
    while (true) {
      const leftChildIdx = 2 * idx + 1;
      const rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < node.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (!swap && rightChild.priority < node.priority) ||
          (swap && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (!swap) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = node;
      idx = swap;
    }
    return min;
  }
}

const priority = new PriorityQueue();
priority.enqueue("Eat", 5);
priority.enqueue("Finish DSA by Colt", 2);
priority.enqueue("Practise Leetcode", 3);
priority.enqueue("Make tons of money", 0);
priority.enqueue("Be healthy", 1);
console.log(priority.enqueue("Japa", 4));
console.log(priority.dequeue());
console.log(priority.dequeue());
console.log(priority.dequeue());
console.log(priority.dequeue());
console.log(priority.dequeue());
console.log(priority.dequeue());
console.log(priority.dequeue());
