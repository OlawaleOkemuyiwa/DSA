//Doubly linked lists are almost identical to Singly linked lists except there is an additional pointer to previous nodes
//DLL has some certain advantages over SLL such as bidirectional traversal, easier deletion of nodes {O(1) deletion of tail node}, efficient insertion and deletion at both ends.
//However, they do take up more memory considering due to the extra pointer

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const prev = oldTail.prev;
      oldTail.prev = null;
      prev.next = null;
      this.tail = prev;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (this.length === 0) return undefined;

    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = oldHead.next;
      newHead.prev = null;
      oldHead.next = null;
      this.head = newHead;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    // searching and accessing --> O(n) [technically it is O(n/2) as we have to traverse from the head to middle or from the tail to the middle to get the desired node (no random access as with an array) but that's still O(n)]
    if (index < 0 || index >= this.length) return null;
    let currentNode;
    let curIdx;
    if (index <= this.length / 2) {
      currentNode = this.head;
      curIdx = 0;

      while (curIdx !== index) {
        currentNode = currentNode.next;
        curIdx++;
      }
    } else {
      currentNode = this.tail;
      curIdx = this.length - 1;

      while (curIdx !== index) {
        currentNode = currentNode.prev;
        curIdx--;
      }
    }
    return currentNode;
  }

  set(index, value) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = value;
    return true;
  }

  insert(index, value) {
    //O(1) time if we were only inserting before||after the head and tail nodes. But if we not if we have to run the O(n) get method to find the node at a given idx
    if (index < 0 || index > this.length) return false;
    if (index === 0) return Boolean(this.unshift(value));
    if (index === this.length) return Boolean(this.push(value));

    //for this to run, we have at least 2 nodes in the linked list
    const newNode = new Node(value);
    const nodeAtIndex = this.get(index);
    const nodeBeforeIndex = nodeAtIndex.prev;
    nodeBeforeIndex.next = newNode;
    newNode.prev = nodeBeforeIndex;
    newNode.next = nodeAtIndex;
    nodeAtIndex.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    //O(1) time if a pointer to the node to remove is already provided (we don't have to run the O(n) get method)
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    //for this to run, we must have at least 3 nodes in the linked list
    let nodeToRemove = this.get(index);
    const nodeBeforeIndex = nodeToRemove.prev;
    const nodeAfterIndex = nodeToRemove.next;
    nodeBeforeIndex.next = nodeAfterIndex;
    nodeAfterIndex.prev = nodeBeforeIndex;

    nodeToRemove.next = null;
    nodeToRemove.prev = null;
    this.length--;
    return nodeToRemove;
  }

  reverse() {
    if (!this.head) return false;

    let currentNode = this.head;
    let prevNode; //we don't have to compulsorily initialize the prevNode of the currentNode to be null for first iteration like as in SLL as we can specifically determine what the actual prev value (prevNode) of the currentNode the iteration is on.

    while (currentNode) {
      //let prevNode reference the prev value of the currentNode
      prevNode = currentNode.prev;

      //stash the next of the currentNode into the next variable or it would be lost
      let next = currentNode.next;

      //assign prevNode to the next property of the currentNode
      currentNode.next = prevNode;

      //assign the stashed next of the current node to now be the prev value of the same current node
      currentNode.prev = next;

      //INCREMENT: since the next of the currentNode now points to prevNode [for first iteration, currentNode is this.head so currentNode.next, this.head.next points to null] and prev of the currentNode now points to the next node in the list. To move to the next node we must assign the prev value of the currentNode to now become the currentNode for the next iteration
      currentNode = currentNode.prev;
    }

    //this.head.next is now null, therefore this.head should be assigned to this.tail [Former head becomes the new tail]
    this.tail = this.head;

    //Before changing head, check for the case like a list with only 1 node
    if (prevNode) {
      //At the end of the loop, prevNode is now the node just before the last node. it's prev is also now pointing to the last node (which is the new head)
      this.head = prevNode.prev;
    }
    return this;
  }

  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode) {
      arr.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return arr;
  }
}

const DLL = new DoublyLinkedList();
DLL.push(2);
DLL.push(4);
console.log(DLL.insert(1, 3));
// console.log(DLL);
console.log(DLL.print());
console.log(DLL.reverse());
console.log(DLL.print());
