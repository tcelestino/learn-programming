// Recursão e Complexidade
// Problema: Encontrar o n-ésimo número de Fibonacci
export function fibonacciRecursive(n: number): number {
  if (n <= 1) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// Versão otimizada com programação dinâmica
export function fibonacciDP(n: number): number[] {
  const memo = new Array(n + 1).fill(0);
  memo[1] = 1;

  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}
