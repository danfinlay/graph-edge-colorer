# Graph Edge Colorer

A module for coloring the edges of a graph with the fewest possible colors.

## Installation

`npm install graph-edge-colorer -S`

## Usage

```javascript
const Colorer = require('graph-edge-colorer')

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const graph = new Module(numbers)

// can auto-fill all edges for a complete graph:
graph.makeComplete()

// Adds a `.color` property to all edges:
graph.colorEdges()

let lacksColor = false
graph.edges.forEach((edge) => {
  if (!edge.color) {
    lacksColor = true
  }
})
t.ok(!lacksColor, 'no edge lacks a color')

let vertexHasTwoSameColoredEdges = false
graph.vertices.forEach((vertex) => {
  const edgeColors = vertex.edges.map(edge => edge.color)
  const colorSet = new Set(edgeColors)
  if (colorSet.size !== edgeColors.length) {
    vertexHasTwoSameColoredEdges = true
  }
})

t.ok(!vertexHasTwoSameColoredEdges, 'no vertex has two same colored edges')
```

