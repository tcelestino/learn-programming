import { groupTransactionsByMonth, transactions } from './01.ts';

export function run() {
  // Exercício 1
  console.log(groupTransactionsByMonth(transactions));
}
