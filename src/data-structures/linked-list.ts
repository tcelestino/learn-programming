// Estruturas de Dados
// Implemente uma lista encadeada (Linked List) com métodos de inserção e remoção
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
  }

  // Inserir no início - O(1)
  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Remover do início - O(1)
  removeFromBeginning() {
    if (!this.head) return null;
    const removed = this.head;
    this.head = this.head.next;
    return removed.data;
  }

  // Imprimir lista - O(n)
  print() {
    let current = this.head;
    const elements = [];
    while (current) {
      elements.push(current.data);
      current = current.next;
    }
    return elements;
  }
}
