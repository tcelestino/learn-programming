// Torre de Hanoi
// Resolve o problema da Torre de Hanoi recursivamente
export default function towerOfHanoi(
  n,
  source = 'A',
  auxiliary = 'B',
  target = 'C',
  moves = []
) {
  if (n === 1) {
    moves.push(`Move disk 1 from ${source} to ${target}`);
    return moves;
  }

  towerOfHanoi(n - 1, source, target, auxiliary, moves);
  moves.push(`Move disk ${n} from ${source} to ${target}`);
  towerOfHanoi(n - 1, auxiliary, source, target, moves);

  return moves;
}
