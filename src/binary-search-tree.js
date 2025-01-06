const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  root() {
    return this.rootNode || null;
    // remove line with error and write your code here
  }

  add( data ) {

    this.rootNode = addWithin(this.rootNode, data);

    function addWithin(node, data) {

      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.left = addWithin(node.left, data);
      }

      else {
        node.right = addWithin(node.right, data);
      }

      return node;
    }
    // remove line with error and write your code here
  }

  has( data ) {

    return searchWithin(this.rootNode, data);

    function searchWithin(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      return data < node.data ?
          searchWithin(node.left, data) :
          searchWithin(node.right, data);
    }
    // remove line with error and write your code here
  }

  find(data) {
    return findWithin(this.rootNode, data);

    function findWithin(node, data) {
      if (!node) {
        return null;
      }

      if (data === node.data) {
        return node;
      }

      return data < node.data
      ? findWithin(node.left, data)
      : findWithin(node.right, data);
    }
    // remove line with error and write your code here
  }

  remove(data) {

    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {

      if (!node) {
        return null;
      }

      if (data < node.data ) {
        node.left = removeNode(node.left, data);
        return node;
      }
      else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      }
      else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let minOfRight = node.right;
        while (minOfRight.left) {
          minOfRight = minOfRight.left;
        }
        node.data = minOfRight.data;

        node.right = removeNode(node.right, minOfRight.data);

        return node;
      }
    }
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }

    return node.data;
    // remove line with error and write your code here
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }

    return node.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};