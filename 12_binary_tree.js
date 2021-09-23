class BinaryTree {
  constructor() {
    this.root = null;
  }

  add(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
    }
    let node = this.root;
    while (node) {
      if (value > node.value) {
        if (!node.right) {
          break;
        }
        node = node.right;
      } else {
        if (!node.left) {
          break;
        }
        node = node.left;
      }
    }
    let newNode = new TreeNode(value);
    if (value > node.value) {
      node.right = newNode;
    } else {
      node.left = newNode;
    }
  }

  print(root = this.root) {
    if (!root) {
      return true;
    }
    console.log(root.value);
    this.print(root.left);
    this.print(root.right);
  }
}

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new BinaryTree();

tree.add(1);
tree.add(2);
tree.add(3);
tree.add(55);
tree.add(559);
tree.add(5591);
tree.add(1);

tree.print();
