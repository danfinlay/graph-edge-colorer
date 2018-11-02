class Edge {
  constructor (members) {
    if (!members) {
      throw new Error('cannot construct edge with no members')
    }
    this.members = members
    members.forEach((vertex) => {
      if (!vertex) {
        throw new Error('Edge contains null vertex: ' + this.members)
      }
      vertex.addEdge(this)
    })
  }

  matches (v1, v2) {
    const mem = this.members
    return (mem[0] === v1 && mem[1] === v2) || (mem[0] === v2 && mem[1] === v1)
  }
}

module.exports = Edge

