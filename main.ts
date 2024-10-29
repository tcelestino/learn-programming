import { run as runSt } from './src/data-structures/index.ts';
import { run as runDP } from './src/design-patterns/index.ts';
import { run as runEx } from './src/pratices/index.ts';

if (import.meta.main) {
  switch (Deno.args[0]) {
    case 'dp':
      runDP();
      break;
    case 'ex':
      runEx();
      break;
    default:
      runSt();
      break;
  }
}
