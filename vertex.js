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

  getMissingColor(colors) {

    // Construct color list
    var colorArr = []
    for (var i = 0; i <= colors; i++) {
      colorArr.push(i)
    }

    let colorMap = {}

    this.edges.forEach((edge) => {
      colorMap[edge.color] = true
    })

    let missing
    colorArr.forEach((color) => {
      if (!colorMap[color]) {
        missing = color
      }
    })
    return missing
  }
}

module.exports = Vertex
