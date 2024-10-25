// Manipulação de Arrays e Maps
// Problema: Encontrar o primeiro caractere que não se repete em uma string
export function firstNonRepeatingChar(str: any) {
  const charCount = new Map();

  // Contagem de caracteres - O(n)
  for (const char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Encontrar primeiro caractere não repetido - O(n)
  for (const char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  return null;
}

// Subarray com Soma Máxima (Kadane's Algorithm)
// Encontra a soma máxima de um subarray contíguo
export function maxSubArraySum(arr: string | any[]) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

// Encontrar Números Duplicados
// Encontra todos os números que aparecem mais de uma vez em um array
export function findDuplicates(arr: any) {
  const seen = new Set();
  const duplicates = new Set();

  for (const num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
  }

  return Array.from(duplicates);
}

// Validador de Parênteses
// Verifica se uma string tem parênteses, colchetes e chaves balanceados
export function isBalanced(str: any) {
  const stack = [];
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (const char of str) {
    if (pairs[char]) {
      stack.push(char);
    } else if (Object.values(pairs).includes(char)) {
      if (!stack.length || pairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
