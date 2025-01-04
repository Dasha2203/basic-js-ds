const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  tree = null;

  root() {
    return this.tree;
  }

  add(data) {
    if (!this.tree) {
      this.tree = new Node(data);
    }

    this.insertNode(this.tree, data);
  }

  has(data) {
    return !!this.searchNode(this.tree, data);
  }

  find(data) {
    return this.searchNode(this.tree, data);
  }

  remove(data) {
    this.removeNode(this.tree, data);

  }

  min() {
    return this.getMin(this.tree);
  }

  max() {
    return this.getMax(this.tree);
  }

  removeNode(node, value) {
    if (node.data === value) {
      node.left = null;
      node.right = null;
      node.data = null;
      return;
    }

    if (node.left) {
      if (value < node.left.data) {
        return this.removeNode(node.left, value);
      }

      if (value === node.left.data) {
        node.left = null;
        return;
      }
    }

    if (node.right) {
      if (value > node.right.data) {
        return this.removeNode(node.right, value);
      }

      if (value === node.right.data) {
        node.right = null;
        return;
      }
    }

    return null;
  }

  searchNode(node, value) {
    if (node.data === value) {
      return node;
    }

    if (node.left && value <= node.left.data) {
      return this.searchNode(node.left, value);
    }

    if (node.right && value >= node.right.data) {
      return this.searchNode(node.right, value);
    }

    return null;
  }

  insertNode(parentNode, value) {

    if (value < parentNode.data) {
      if (parentNode.left === null) {
        parentNode.left = new Node(value);
        return;
      }
        
      this.insertNode(parentNode.left, value);
      return;
    }
    
    if (value > parentNode.data) {
      if (parentNode.right === null) {
        parentNode.right = new Node(value);
        return;
      }
      
      this.insertNode(parentNode.right, value);
      return;
    }
  }

  getMin(parentNode) {
    if (parentNode.left === null) {
      return parentNode.data;
    }

    return this.getMin(parentNode.left);
  }

  getMax(parentNode) {
    if (parentNode.right === null) {
      return parentNode.data;
    }

    return this.getMax(parentNode.right);
  }
}

module.exports = {
  BinarySearchTree
};