import { groupTransactionsByMonth, transactions } from './01.ts';

export function run() {
  // Exerciço 1
  console.log(groupTransactionsByMonth(transactions));
}
