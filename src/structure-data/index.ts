import LinkedList from './linked-list.ts';
import quickSort from './quick-sort.ts';
import { fibonacciDP, fibonacciRecursive } from './fibonacci.ts';
import { findDuplicates, firstNonRepeatingChar, isBalanced, maxSubArraySum } from './array-maps.ts';
import BinarySearchTree from './tree.ts';
import towerOfHanoi from './tower-hanoi.ts';
import isPalindrome from './palindrome.ts';
import areAnagrams from './anagrams.ts';
import countBits from './count-bits.ts';

export function run() {
  // Teste da Lista Encadeada
  console.log('=== Teste Lista Encadeada ===');
  const list = new LinkedList();
  list.insertAtBeginning(3);
  list.insertAtBeginning(2);
  list.insertAtBeginning(1);
  console.log('Lista:', list.print()); // [1, 2, 3]
  console.log('Removido:', list.removeFromBeginning()); // 1
  console.log('Lista após remoção:', list.print()); // [2, 3]

  // Teste do QuickSort
  console.log('\n=== Teste QuickSort ===');
  const arr = [64, 34, 25, 12, 22, 11, 90];
  console.log('Array original:', arr);
  console.log('Array ordenado:', quickSort(arr));

  // Teste do Fibonacci
  console.log('\n=== Teste Fibonacci ===');
  const n = 10;
  console.log(`Fibonacci(${n}) recursivo:`, fibonacciRecursive(n));
  console.log(`Fibonacci(${n}) programação dinâmica:`, fibonacciDP(n));

  // Teste do Primeiro Caractere Não Repetido
  console.log('\n=== Teste Primeiro Caractere Não Repetido ===');
  const str = 'QuintoAndar';
  console.log(`String: ${str}`);
  console.log('Primeiro caractere não repetido:', firstNonRepeatingChar(str));

  // Teste da Árvore Binária de Busca
  console.log('\n=== Teste Árvore Binária de Busca ===');
  const bst = new BinarySearchTree();
  [5, 3, 7, 1, 4, 6, 8].forEach((value) => bst.insert(value));
  console.log('Buscar 4:', bst.search(4)); // true
  console.log('Buscar 9:', bst.search(9)); // false

  // Teste de Palíndromo
  console.log('\n=== Teste de Palíndromo ===');
  console.log("'A man a plan a canal Panama':", isPalindrome('A man a plan a canal Panama')); // true
  console.log("'race a car':", isPalindrome('race a car')); // false

  // Teste de Anagrama
  console.log('\n=== Teste de Anagrama ===');
  console.log("'listen' e 'silent':", areAnagrams('listen', 'silent')); // true
  console.log("'hello' e 'world':", areAnagrams('hello', 'world')); // false

  // Teste de Subarray com Soma Máxima
  console.log('\n=== Teste de Subarray com Soma Máxima ===');
  console.log('[-2, 1, -3, 4, -1, 2, 1, -5, 4]:', maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

  // Teste de Números Duplicados
  console.log('\n=== Teste de Números Duplicados ===');
  console.log('[1, 2, 3, 1, 2, 5]:', findDuplicates([1, 2, 3, 1, 2, 5])); // [1, 2]

  // Teste de Validador de Parênteses
  console.log('\n=== Teste de Validador de Parênteses ===');
  console.log("'{[()]}':", isBalanced('{[()]}')); // true
  console.log("'{[(])}':", isBalanced('{[(])}')); // false

  // Teste de Torre de Hanoi
  console.log('\n=== Teste de Torre de Hanoi ===');
  console.log('3 discos:', towerOfHanoi(3));

  // Teste de Contagem de Bits
  console.log('\n=== Teste de Contagem de Bits ===');
  console.log('7 (111 em binário):', countBits(7)); // 3
  console.log('15 (1111 em binário):', countBits(15)); // 4
}
