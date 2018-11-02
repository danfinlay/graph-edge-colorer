class Vertex {
  constructor (element) {
    this.element = element
    this.edges = []
  }

  is (el) {
    return el === this.element
  }

  addEdge(edge) {
    if (!this.edges.includes(edge)) {
      this.edges.push(edge)
    }
  }
}

module.exports = Vertex
