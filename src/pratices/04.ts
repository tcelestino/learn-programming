// Problema: Implementar uma função que remova itens duplicados na lista de objetos

interface List {
  name: string;
}

export const contactList = [
  { name: 'John' },
  { name: 'Sara' },
  { name: 'Sara' },
  { name: 'Lynn' },
  { name: 'Jake' },
];

// usando new Map() e new Set()
export function removeDuplicateMap(list: List[]) {
  const map = new Map();

  list.forEach((item) => {
    map.set(item.name, item);
  });

  return Array.from(map.values());
}

// usando abordagem mais moderna com o metodo filter()
export function removeDuplicateFilter(list: List[]) {
  return list.filter((item, index) => list.findIndex(({ name }) => name === item.name) === index);
}

// ou combinando reduce() + map()
export function removeDuplicateReduceMap(list: List[]) {
  const unique = Object.keys(
    list.reduce((acc, cur) => {
      acc[cur.name] = cur.name;
      return acc;
    }, {}),
  );

  return unique.map((name) => ({ name }));
}
