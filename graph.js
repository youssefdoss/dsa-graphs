'use strict';

/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    for (let node of this.nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.delete(vertex);
      }
    }
    this.nodes.delete(vertex);
  }

  // /** traverse graph with DFS and returns array of Node values */
  // // recursion
  // depthFirstSearch(start, seen = new Set(), values = []) {
  //   if (!start) return null;

  //   seen.add(start);
  //   values.push(start.value);

  //   for (let neighbor of start.adjacent) {
  //     if (!seen.has(neighbor)) {
  //       this.depthFirstSearch(neighbor, seen, values);
  //     }
  //   }

  //   return values;
  // }

  /** traverse graph with DFS and returns array of Node values */
  // iteration
  depthFirstSearch(start) {
    let nodesVisited = new Set();
    let toVisitStack = [start];

    while (toVisitStack.length) {
      let currNode = toVisitStack.pop();
      nodesVisited.add(currNode);

      for (let neighbor of currNode.adjacent) {
        if (!nodesVisited.has(neighbor)) {
          toVisitStack.push(neighbor);
        }
      }
    }

    return Array.from(nodesVisited).map(n => n.value);
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start) {
    let nodesVisited = new Set();
    let toVisitQueue = [start]; // array is not the best choice but whatever

    while (toVisitQueue.length) {
      let currNode = toVisitQueue.shift();
      nodesVisited.add(currNode);

      for (let neighbor of currNode.adjacent) {
        if (!nodesVisited.has(neighbor)) {
          toVisitQueue.push(neighbor);
        }
      }
    }

    return Array.from(nodesVisited).map(n => n.value);
  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) {
    let nodesVisited = new Set();
    let toVisitQueue = [[start, 0]];

    while (toVisitQueue.length) {
      let [currNode, distanceSoFar] = toVisitQueue.shift();
      nodesVisited.add(currNode);

      if (currNode === end) return distanceSoFar;

      for (let neighbor of currNode.adjacent) {
        if (!nodesVisited.has(neighbor)) {
          toVisitQueue.push([neighbor, distanceSoFar + 1]);
        }
      }
    }

    return;
  }

  /**shortestPath
     *
     * Finds the shortest path from start vertex to end vertex and returns
     * path or null if no path.
     *
     * start/end: { value: "", adjacent: [ {}, {} ] }
     */
  // BFS, iteration
  shortestPath(start, end) {
    if (start === end) return [start];

    let nodesVisited = new Set();
    let toVisitQueue = [[start, []]];

    while (toVisitQueue.length) {
      let [currNode, currPath] = toVisitQueue.shift();
      nodesVisited.add(currNode);

      if (currNode === end) {
        return [...currPath, end];
      }

      for (let neighbor of currNode.adjacent) {
        if (!nodesVisited.has(neighbor)) {
          toVisitQueue.push([neighbor, [...currPath, currNode]]);
        }
      }
    }

    return null;
  }
}


module.exports = { Graph, Node }
