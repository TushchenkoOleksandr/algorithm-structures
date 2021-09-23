const tree = [
  {
    v: 5,
    c: [
      {
        v: 10,
        c: [
          {
            v: 11,
          },
        ],
      },
      {
        v: 7,
        c: [
          {
            v: 5,
            c: [
              {
                v: 1,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    v: 5,
    c: [
      {
        v: 10,
      },
      {
        v: 15,
      },
    ],
  },
];

const recursive = (tree) => {
  let sum = 0;
  tree.forEach((node) => {
    if (node.c) {
      sum += recursive(node.c);
    }
    sum += node.v;
  });
  return sum;
};

const iteration = (tree) => {
  let sum = 0;
  let stack = [];
  tree.forEach((node) => {
    if (node.c) {
      stack.push(node.c);
    }
    sum += node.v;
  });
  while (stack.length > 0) {
    let node = stack.pop();
    node.forEach((node) => {
      if (node.c) {
        stack.push(node.c);
      }
      sum += node.v;
    });
  }
  return sum;
};

console.log(recursive(tree));
console.log(iteration(tree));
