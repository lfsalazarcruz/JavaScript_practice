// Tree simple implementation

var root = {
  value: "Merry",
  left: {
    value: "Christmas",
    left: null,
    right: null
  },
  right: {
    value: "Tree",
    left: null,
    right: null
  }
};

console.log(root.left);

// Creating a tree using objects

// Node properties
class Node {
  constructor(data) {
    this.data = data;
    this.parent = null;
    this.children = [];
  }
}

// Tree properties
class Tree {
  constructor(data) {
    var node = new Node(data);
    this.root = node;
  }
}

var tree = new Tree("one");

console.log(tree);

tree.root.children.push(new Node("two"));
console.log(tree.root);
tree.root.children[0].parent = "one";
console.log(tree.root);
