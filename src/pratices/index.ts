import { groupTransactionsByMonth, transactions } from './01.ts';
import { contactList, removeDuplicateFilter, removeDuplicateMap, removeDuplicateReduceMap } from './04.ts';

export function run() {
  console.log('=== Agrupando total de valores por data===');
  console.log(groupTransactionsByMonth(transactions));

  console.log('=== Removendo item duplicado de um array de objetos ===');
  console.log('Removendo usando new Map()', removeDuplicateMap(contactList));
  console.log('Removendo usando .filter()', removeDuplicateFilter(contactList));
  console.log('Removendo combinando .reduce() e .map()', removeDuplicateReduceMap(contactList));
}
