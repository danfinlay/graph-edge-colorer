const Vertex = require('./vertex')
const Edge = require('./edge')
const Ring = require('./ring')

class Graph {

  constructor (elements) {
    this.vertices = elements.map(el => new Vertex(el))
    this.edges = []
  }

  addEdge(v1, v2) {
    if (v1 === v2) return

    const dupes = this.edges.filter((edge) => {
      return edge.matches(v1, v2)
    })

    if (dupes.length === 0) {
      const edge = new Edge([v1, v2])
      this.edges.push(edge)
      return edge
    } else {
      const dupe = dupes[0]
      return dupe
    }
  }

  makeComplete() {
    this.vertices.forEach((v1) => {
      this.vertices.forEach((v2) => {
        this.addEdge(v1, v2)
      })
    })
  }

  colorEdges() {
    const isOdd = this.vertices.length % 2 !== 0
    const ring = new Ring(this.vertices)
    let color = 0

    this.vertices.forEach((vertex, index) => {
      if (index > ring.maxRingIndex) return

      color++

      let v1 = vertex
      let v2 = ring.nextVertex(v1)

      while (v1 !== v2) {
        const edge = this.addEdge(v1, v2)
        edge.color = color

        v1 = ring.lastVertex(v1)
        v2 = ring.nextVertex(v2)
      }
    })

    if (!isOdd) {

      let v1 = this.vertices[this.vertices.length - 1]

      this.vertices.forEach((v2) => {
        if (v1 === v2) return

        const missingColor = v2.getMissingColor(color)
        let edge = this.addEdge(v1, v2)
        edge.color = missingColor
      })

    }

  }

}

module.exports = Graph
