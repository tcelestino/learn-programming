import { expect } from 'jsr:@std/expect';
import { transactions, groupTransactionsByMonth } from '../01.ts';

Deno.test('should group transactions by month correctly', () => {
  const result = groupTransactionsByMonth(transactions);
  expect(result).toStrictEqual({
    '2024-01': 3500,
    '2024-02': 1800,
  });
});

Deno.test('should handle empty array', () => {
  const result = groupTransactionsByMonth([]);
  expect(result).toStrictEqual({});
});
