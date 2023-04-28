// Stacks and queues are abstract data structure.
// Stacks are not built in DS in JS (in some languages they are). They abide by LIFO principle (last in, first out - The last element added to the stack will be the first element removed from the stack)
// Stacks are used in managing functions invocations, UNDO/REDO functionality, Routing (the history browser)

//Array implementation of a stack: using only push and pop to store and access data (the last added data is removed first). Also using unshift and shift only works (tho this is not desirable as inserting and deleting from the beginning of an array is bad coz of re-indexing the entire array as oppossed to just creating a new index for the new element when we use push)
const stack = [];
stack.push("FIRST");
stack.push("SECOND");
stack.push("THIRD");
console.log(stack.pop()); //"THIRD"
stack.pop(); //"SECOND"
stack.pop(); //"FIRST"

//Creating our own stacks: Linked list implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null; //first is the firstNode to be removed from the stack. That is, the last item to the stack (to the beginning of the list) [LIFO]
    this.last = null; //last is the lastNode to be removed from the stack. It is the first item added to the stack
    this.size = 0;
  }

  push(val) {
    //O(n) it's named push but we're actually adding new nodes to the beginning of the exisiting list (unshift). This is fine cause its a linked list and no re-indexing occur as opposed to stack implementation using an array
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    //it's named pop but we're actually removing from the beginning of the list (shift). If we were to remove from the end, we would have to loop through the entire list --> O(n). This is not desirable if we can achieve the same result adding and removing from the beginning O(1). This is fine cause its a linked list stack implementation and no re-indexing occur as opposed to stack implementation using an array when elements added to/deleted from the beginning
    if (!this.first) return undefined;

    const currentFirst = this.first;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = currentFirst.next;
      currentFirst.next = null;
    }
    this.size--;
    return currentFirst.value;
  }

  //SEARCHING AND ACCESSING A VALUE --> O(n). inserting and removal are the things prioritized in stacks. If getting/accessing individual items using index or position is a priority then an array or some other DS can be used instead of a stack
}

const myStack = new Stack();
console.log(myStack.push("FIRST"));
console.log(myStack.push("SECOND"));
console.log(myStack.push("THIRD"));
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack);
