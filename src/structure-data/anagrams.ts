// Anagrama
// Verifica se duas strings são anagramas uma da outra
export default function areAnagrams(str1: string | any[], str2: string | any[]) {
  if (str1.length !== str2.length) return false;

  const charCount = new Map();

  // Conta os caracteres da primeira string
  for (const char of str1) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Desconta os caracteres da segunda string
  for (const char of str2) {
    if (!charCount.has(char)) return false;
    charCount.set(char, charCount.get(char) - 1);
    if (charCount.get(char) === 0) charCount.delete(char);
  }

  return charCount.size === 0;
}
