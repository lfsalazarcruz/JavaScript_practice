function Node(value) {
  this.value = value;
  this.edges = [];
  this.searched = false;
  this.parent = null;
}

function Graph() {
  this.nodes = [];
  this.graph = {};
}
