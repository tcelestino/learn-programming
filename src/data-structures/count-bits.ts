// Contar Bits
// Conta o número de bits 1 em um número
export default function countBits(n: number) {
  let count = 0;
  while (n) {
    count += n & 1;
    n >>= 1;
  }
  return count;
}
