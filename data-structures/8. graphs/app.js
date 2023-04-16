class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    //we do for both v1 to v2 AND v2 to v1 cause we're dealing with an undirected graph. If it was a directed graph we would have to only do either v1 to v2 OR v2 to v1 depending on who is meant to be directed to the other
    this.adjacencyList[vertex1]?.push(vertex2);
    this.adjacencyList[vertex2]?.push(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(el => el !== vertex2);
    if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(el => el !== vertex1);
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex][0];
        this.removeEdge(vertex, adjacentVertex)
      }
      delete this.adjacencyList[vertex];
    }
  }

  DFSRecusive(starterVertex) { //DFS of a graph basically means to follow the neigbouring adjacent nodes/starterVertexes before backtracking
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    
    function helper(vertex) {
      visited[vertex] = true;
      result.push(vertex);
      for (let adjacentVertex of adjacencyList[vertex]) {
        if(!(visited[adjacentVertex])) helper(adjacentVertex);
      }
    }
    helper(starterVertex);
    return result;
  }

  DFSIterative(starterVertex) { //A vertex is noted to have been visited when it has been added to the stack for processing
    const result = [];
    const visited = {};
    const stack = [starterVertex];
    visited[starterVertex] = true;

    while (stack.length) {
      let currentVertex = stack.pop();
      result.push(currentVertex);

      for (let adjacentVertex of this.adjacencyList[currentVertex]) {
        if (!visited[adjacentVertex]) {
          stack.push(adjacentVertex);
          visited[adjacentVertex] = true;
        }
      }
    }
    return result;
  }

  BFS(starterVertex) { //BFS priotizes visiting all of the adjacent vertexes (neigbors) at a given depth before moving downwards
    const result = [];
    const visited = {};
    const queue = [starterVertex];
    visited[starterVertex] = true;

    while(queue.length) {
      let currentVertex = queue.shift();
      result.push(currentVertex);
    
      for (let adjacentVertex of this.adjacencyList[currentVertex]) {
        if (!visited[adjacentVertex]) {
          visited[adjacentVertex] = true;
          queue.push(adjacentVertex);
        }
      }
    }
    return result;
  }
}

let g = new Graph();
// g.addVertex("Dallas");
// g.addVertex("Tokyo");
// g.addVertex("Aspen");
// g.addVertex("Los Angeles");
// g.addVertex("Hong Kong")
// g.addEdge("Dallas", "Tokyo");
// g.addEdge("Dallas", "Aspen");
// g.addEdge("Hong Kong", "Tokyo");
// g.addEdge("Hong Kong", "Dallas");
// g.addEdge("Los Angeles", "Hong Kong");
// g.addEdge("Los Angeles", "Aspen");;
// g.removeVertex("Hong Kong");
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
// g.depthFirstRecursive("A")
console.log(g);
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F
console.log(g.DFSRecusive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFS("A"));