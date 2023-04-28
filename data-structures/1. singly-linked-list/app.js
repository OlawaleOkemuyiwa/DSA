// The nodes of a linked list is similar to the elements of an array. A node stores a piece of data (val) and then stores a reference to the next node after it (next)
// singly linked list excel above array in terms of deletion and insertion at the beginning. It is also favorable where we wish to store ordered data but random access to them is not required
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    //O(n)
    if (this.length === 0) return undefined;

    let currentNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev;
      // when currentNode.next is falsy (null) then currentNode is the last node and prev is the node just before it
      while (currentNode.next !== null) {
        prev = currentNode; // stash the currentNode into prev so when we move to the next, the node before it is saved
        currentNode = currentNode.next;
      }
      this.tail = prev;
      this.tail.next = null;
    }
    this.length--;
    return currentNode;
  }

  shift() {
    if (this.length === 0) return undefined;

    const currentHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const newHead = currentHead.next;
      this.head = newHead;
      currentHead.next = null;
    }
    this.length--;
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.tail;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    // searching and accessing --> O(n) as we have to traverse from the head to the desired node (no random access)
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    let counter = 0;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
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
    // O(1)
    if (index < 0 || index > this.length) return false;
    if (index === 0) return Boolean(this.unshift(value));
    if (index === this.length) return Boolean(this.push(value));

    //for this to run, we have at least 2 nodes in the linked list
    const newNode = new Node(value);
    const nodeBeforeIndex = this.get(index - 1);
    const nodeAtIndex = nodeBeforeIndex.next;
    nodeBeforeIndex.next = newNode;
    newNode.next = nodeAtIndex;
    this.length++;
    return true;
  }

  remove(index) {
    // O(1) if node to remove is at the beginning of the list or O(n) if the node is at the end
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    // for this to run, we must have at least 3 nodes in the linked list
    const nodeBeforeIndex = this.get(index - 1);
    let nodeToRemove = nodeBeforeIndex.next;
    nodeBeforeIndex.next = nodeToRemove.next;

    nodeToRemove.next = null;
    this.length--;
    return nodeToRemove;
  }

  reverse() {
    //if list is empty (has no node i.e head is null) return false;
    if (!this.head) return false;

    //make the current head of the list become the tail (after the first iteration the next of the head will become null which means the head is now the tail (tail node  has the next value of null)). Then at the end of the loop, the head becomes the new list

    //on the first iteration currentNode is the 1st node, i.e the head, as the loop continues it changes to the 2nd, 3rd etc
    let currentNode = this.head;

    //prev is used to store node before the currentNode. on the first iteration currentNode is the head (1st node) so prev is initialized specifically to be null [as opposed to undefined or sth]so it's next can then point to null (becomes the tail). The prev is then becomes the currentNode for the 2nd iteration and the currentNode becomes the currentNode.next
    let prev = null;

    while (currentNode) {
      //stash the next of the currentNode into the next variable or it would be lost
      let next = currentNode.next;

      //then set the next of the currentNode to be the previous node
      currentNode.next = prev; //on 1st iteration currentNode references this.head obj thereby setting this.head.next = null, then on 2nd/subsequent iterations currentNode is re-assigned to another obj in memory and no longer holds reference to this.head [i.e this.head.next remains null]. At the end of the loop/reversal, the value of this.head ( {val: sth, next: null} ) is assigned to this.tail and then the constructed list is assigned to this.head

      //INCREMENT: set the currentNode to now become the previous node
      prev = currentNode;

      //INCREMENT: assign the stashed next of the current node to now be the currentNode for the next iteration
      currentNode = next;
    }

    //At the end of the reversal, prev is now the new head of the newly constructed list (reversed from the initial list) and this.head should be reset to it [Former head becomes the new tail]. Also next is null and currentNode is also null;
    this.tail = this.head; //{val: sth, next: null}
    this.head = prev;
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

  count() {
    if (this.length === 0) return 0;
    let currentNode = this.head;
    let length = 0;

    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }
    return length;
  }
}

const SLL = new SinglyLinkedList();
SLL.push(4);
SLL.push(6);
SLL.unshift(2);
SLL.unshift(1);
// console.log(SLL.count());
// console.log(SLL.print());
console.log(SLL.reverse());
console.log(SLL.print());

/*
let info = {
  //this object is created in memory and a reference to it is saved into info variable
  name: "Wale",
  age: 24,
};

const person = {
  first: {
    nes: {
      val: {
        nest: info, //the info variable referenece is then copied into this "nest" property. Both nest and info still point to the same 1 object in memeory
      },
    },
  },
  second: null,
  third: info, //the info variable referenece is also then copied into this "third" property. All third, nest and info point to the same 1 object in memeory
};

person.third.name = "Oluwaseun"; //a change is made to the "third" reference property. This change will mutate the object it references in memory i.e change object {name: 'Wale', age: 24 } to object { name: 'Oluwaseun', age: 24}. Now all the other reference variable and property to this same object references the new value of the object {name: 'Oluwaseun', age: 24}
console.log(info);
console.log(person);

info = {
  //now the info is assigned (serves as a reference) to another newly created object in memory therefore loses references to the previous object in memory it references. As such "nest" and "third" properties will still reference the same object in memory but info now references an entirely different object
  name: "Oyindamola",
  age: 26,
};
console.log(info);
console.log(person);
*/
