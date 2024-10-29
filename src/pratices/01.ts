// Problema: Implementar uma função que agrupa transações imobiliárias por mês
// e calcula o total de cada mês

export const transactions = [
  { id: 1, amount: 1500, date: '2024-01-15' },
  { id: 2, amount: 2000, date: '2024-01-20' },
  { id: 3, amount: 1800, date: '2024-02-10' },
];

export function groupTransactionsByMonth(transactions: any[]) {
  return transactions.reduce((acc: { [x: string]: any }, transaction: { date: string; amount: number }) => {
    const month = transaction.date.substring(0, 7);
    acc[month] = (acc[month] || 0) + transaction.amount;
    return acc;
  }, {});
}

console.log(groupTransactionsByMonth(transactions));
