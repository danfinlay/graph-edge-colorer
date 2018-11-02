var Graph = require('graph.js/dist/graph.full.js');

class GraphEdgeColorer {

  constructor (vertices) {
    const graph = new Graph(vertices)
    this.graph = graph

    console.log('constructing with', vertices, this.graph)

    for (let [key, value] of graph) {
      for (let [key2, value2] of graph) {
        console.log('considering ', key, key2)
        if (key !== key2) {
          console.log('adding edge',key, key2)
          graph.addEdge(key, key2)
        }
      }
    }


    this.colors = new Set()
    this.colorForEdge = new Map()

    this.assignCircleForOdds()
    console.dir(this.graph)

  }


  assignCircleForOdds() {
    let lastEdge

    this.outerRing = []

  }

}

class Vertex {
  constructor (label) {
    this.label = label
    this.edges = new Set()
  }
}

class Edge {
  constructor (set) {
    this.members = set
  }
}

module.exports = GraphEdgeColorer
