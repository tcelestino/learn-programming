// Algoritmos de Ordenação
// Implementação do QuickSort com análise de complexidade
export default function quickSort(arr: number[]): any[] {
  if (arr.length <= 1) return arr;

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter((x: number) => x < pivot);
  const middle = arr.filter((x: number) => x === pivot);
  const right = arr.filter((x: number) => x > pivot);

  return [...quickSort(left), ...middle, ...quickSort(right)];
}
