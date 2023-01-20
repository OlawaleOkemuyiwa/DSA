class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    //At best O(logn), At worst O(n) => for binary trees that are constructed to be completely 1 sided (all nodes to the left or all to the right)
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (val === currentNode.value) return undefined;
        if (val > currentNode.value) {
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          }
          currentNode = currentNode.right;
        } else {
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          }
          currentNode = currentNode.left;
        }
      }
    }
    return this;
  }

  contains(val) {
    //At best O(logn), At worst O(n) => for binary trees that are constructed to be completely 1 sided (all nodes to the left or all to the right)
    if (!this.root) return false;
    let currentNode = this.root;
    while (true) {
      console.log(currentNode.value);
      if (val > currentNode.value) {
        if (!currentNode.right) {
          return false;
        }
        currentNode = currentNode.right;
      } else if (val < currentNode.value) {
        if (!currentNode.left) {
          return false;
        }
        currentNode = currentNode.left;
      } else {
        return true;
      }
    }
  }

  breatheFirstSearch() {
    //starting from the root, we traverse each descendant left and right node first, then do the same for a sibling node. We do that till we hit the end
    let currentNode = this.root;
    const unvisitedQueue = [currentNode];
    const visited = [];

    while (unvisitedQueue.length) {
      currentNode = unvisitedQueue.shift();
      visited.push(currentNode.value);

      if (currentNode.left) {
        unvisitedQueue.push(currentNode.left);
      }

      if (currentNode.right) {
        unvisitedQueue.push(currentNode.right);
      }
    }
    return visited;
  }

  preOrderDepthFirstSearch() {
    //PRE ORDER (CURRENT NODE BEFORE ITS CHILDREN: CURRENTNODE, LEFT, RIGHT) --> PUSH THE CURRENT NODE (root) INTO THE VISITED ARRAY BEFORE THEN TRAVERSING DOWNWARDS PUSHING THE CURRENT NODE ALONG THE WAY
    const visited = [];

    function traverse(node) {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }

  postOrderDepthFirstSearch() {
    //POST ORDER (CURRENT NODE AFTER ITS CHILDREN: LEFT, RIGHT, CURRENTNODE) --> TRANSVERSE DOWNWARDS FROM THE ROOT TO THE LAST DESCENDANT, PUSH THE LAST DESCENDANT THEN TO CONTINUE TO PUSH THE CURRENT NODE AS YOU GO BACK UP
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    }
    traverse(this.root);
    return visited;
  }

  inOrderDepthFirstSearch() {
    //POST ORDER (LEFT CHILD BEFORE CURRETNODE, THEN CURRENTNODE, THEN RIGHT CHILD)--> TRANSVERSE DOWNWARDS FROM THE ROOT TO THE LAST DESCENDANT, PUSH THE LAST DESCENDANT (THE LEFT) THEN PUSH THE PARENT , THEN PUSH THE RIGHT SO ON
    const visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return visited;
  }


  preOrderDepthFirstSearchIterative() {
    const visited = [];
    if (!root) return visited;

    const stack = [root]; 
    while (stack.length > 0) {
      const node = stack.pop();
      visited.push(node.val);
      if (node.right) stack.push(node.right);
      if (node.left) stack.push(node.left);

      //we add the left node to the stack after the right node is added so it would be the 1st
      //we would add to the visited arr between the two i.e [node, left, right] PREORDER
    }

    return visited;
  }

  postOrderDepthFirstSearchIterative() {
    const visited = [];
    if (!root) return visited;

    const stack = [root];
    while (stack.length > 0) {
      const node = stack.pop();
      visited.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);

      //we add the right node to the stack after the left node is added so it would be
      //the 1st we would add to the visited arr between the two i.e [node, right, left]
      //[node, right, left].reverse === [left, right, node] POSTORDER
    }

    return visited.reverse();
  }

  inOrderDepthFirstSearchIterative() {
    const visited = [];
    if (!root) return visited;

    let curr = root;
    const stack = [];
    while (curr || stack.length > 0) {
      while (curr) {
        //traverse down the left of current node while pushing each encountered node to the stack until we encounter a null node 
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      visited.push(curr.val);
      curr = curr.right;
    }
    return visited;
  }

  //WHEN TO USE EITHER BFS || DFS ?
  //Time complexity is the same for both as we end up visiting every node. But space complexity differs depending on the structure of the tree. DFS is preferable for a broader tree as BFS would require more space allocation for it's queue. BFS is preferable for narrow trees (tree similar to a linked list) as we've minimal nodes to keep in the queue
}

const BST = new BinarySearchTree();
BST.insert(10);
BST.insert(20);
BST.insert(3);
BST.insert(15);
BST.insert(6);
console.log(BST.insert(8));
console.log(BST.preOrderDepthFirstSearch());
console.log(BST.postOrderDepthFirstSearch());
