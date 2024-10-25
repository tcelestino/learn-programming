// Árvores
// Implementação de uma Árvore Binária de Busca (BST)
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // Inserir valor - O(log n) em média, O(n) no pior caso
  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          break;
        }
        current = current.right;
      }
    }
  }

  // Buscar valor - O(log n) em média, O(n) no pior caso
  search(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) return true;
      if (value < current.value) current = current.left;
      else current = current.right;
    }

    return false;
  }
}
