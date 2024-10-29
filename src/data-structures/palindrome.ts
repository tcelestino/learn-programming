// Palíndromo
// Verifica se uma string é um palíndromo (igual quando lida de trás para frente)
export default function isPalindrome(str: string) {
  // Remove caracteres especiais e converte para minúsculas
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
