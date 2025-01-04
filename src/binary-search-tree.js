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
    return this.removeNode(this.tree, data);
  }

  min() {
    return this.getMin(this.tree);
  }

  max() {
    return this.getMax(this.tree);
  }

  removeNode(node, data) {
    if (!node) return null;
    if (data === node.data) {
      if (!node.left && !node.right) return null;
      if (!node.left) {
        node = node.right;
        return node;
      }
      if (!node.right) {
        node = node.left;
        return node;
      }
      let minRight = node.right;
      while (minRight.left) minRight = minRight.left;
      node.data = minRight.data;
      node.right = this.removeNode(node.right, minRight.data);
      return node;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      node.right = this.removeNode(node.right, data);
      return node;
    }
  }

  searchNode(node, data) {
    if (node.data === data) {
      return node;
    }

    if (node.left && data < node.data) {
      return this.searchNode(node.left, data);
    }

    if (node.right && data > node.data) {
      return this.searchNode(node.right, data);
    }

    return null;
  }

  insertNode(parentNode, data) {

    if (data < parentNode.data) {
      if (parentNode.left === null) {
        parentNode.left = new Node(data);
        return;
      }
        
      this.insertNode(parentNode.left, data);
      return;
    }
    
    if (data > parentNode.data) {
      if (parentNode.right === null) {
        parentNode.right = new Node(data);
        return;
      }
      
      this.insertNode(parentNode.right, data);
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