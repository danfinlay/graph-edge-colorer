const test = require('tape')
const Module = require('../graph')
const Ring = require('../ring')
const fs = require('fs')

test('ring with even count', (t) => {
  const ring = new Ring([1,2,3,4,5,6,7,8,9,10])
  t.equal(ring.maxRingIndex, 8, 'should be 8')

  let res = ring.nextVertex(9)
  t.equal(res, 1, 'should cycle to first el')

  res = ring.lastVertex(1)
  t.equal(res, 9, 'should cycle to last odd el')

  t.end()
})

test('ring with odd count', (t) => {
  const ring = new Ring([1,2,3,4,5,6,7,8,9])
  t.equal(ring.maxRingIndex, 8, 'should be 8')

  let res = ring.nextVertex(9)
  t.equal(res, 1, 'should cycle to first el')

  res = ring.lastVertex(1)
  t.equal(res, 9, 'should cycle to last odd el')

  t.end()
})

test('initializes graph', (t) => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const graph = new Module(numbers)
  graph.makeComplete()
  t.ok(graph)
  const edgeLength = graph.edges.length
  const correctEdgeCount = numbers.length * (numbers.length - 1) / 2
  t.equal(edgeLength, correctEdgeCount, `should have ${correctEdgeCount} edges`)

  graph.colorEdges()
  const colors = []
  graph.edges.forEach((edge) => {
    if (!colors.includes(edge.color)) {
      colors.push(edge.color)
    }
  })

  let maxDepth = 10

  t.ok(colors.length < maxDepth + 1, 'should be solvable with minimal colors')

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

  t.equal(graph.edges.length, correctEdgeCount, 'retained correct edge count')

  const csv = graph.print()
  console.log(csv)
  console.log(csv)
  fs.writeFileSync(__dirname + '/result.csv', csv)

  t.end()
})

