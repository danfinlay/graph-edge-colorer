class Ring {
  constructor (vertices) {
    this.vertices = vertices
    this.count = vertices.length
    this.isOdd = this.count % 2 !== 0
    this.isEven = !this.isOdd
    this.maxRingIndex = this.isOdd ? this.count - 1 : this.count - 2
  }

  nextVertex (vertex) {
    const index = this.vertices.indexOf(vertex)
    if (index === -1) {
      throw new Error('Vertex not found in vertices ' + JSON.stringify(vertex))
    }

    const nextIndex = this.maxRingIndex === index ? 0 : index + 1
    return this.vertices[nextIndex]
  }

  lastVertex (vertex) {
    const index = this.vertices.indexOf(vertex)
    if (index === -1) {
      throw new Error('Vertex not found in vertices ' + JSON.stringify(vertex))
    }
    const lastIndex = 0 === index ? this.maxRingIndex : index - 1
    return this.vertices[lastIndex]
  }

}

module.exports = Ring

