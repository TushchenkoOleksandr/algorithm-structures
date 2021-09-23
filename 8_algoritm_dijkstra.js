const graph = {
  a: { b: 2, c: 1 },
  b: { f: 7 },
  c: { d: 5, e: 2 },
  d: { f: 2 },
  e: { f: 1 },
  f: { g: 1 },
  g: {},
};

const shortPath = (graph, start, end) => {
  const costs = {};
  const processed = [];
  let neighbors = {};

  Object.keys(graph).forEach((node) => {
    if (node !== start) {
      let value = graph[start][node];
      costs[node] = value || 100000;
    }
  });

  let node = findNodeLowestCost(costs, processed);
  while(node) {
    const cost = costs[node]
    neighbors = graph[node]
    Object.keys(neighbors).forEach(neighbor => {
        let newCost = cost + neighbors[neighbor]
        if (newCost < costs[neighbor]) {
            costs[neighbor] = newCost
        }
    })
    processed.push(node)
    node = findNodeLowestCost(costs, processed)
  }
  return costs
};

const findNodeLowestCost = (costs, processed) => {
    let lowestCost = 100000;
    let lowestNode;
    Object.keys(costs).forEach((node) => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
};

console.log(shortPath(graph, 'a', 'g'));