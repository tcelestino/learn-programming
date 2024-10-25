// 2. Factory Pattern
interface Animal {
  makeSound(): string;
}

class Dog implements Animal {
  makeSound() {
    return 'Woof!';
  }
}

class Cat implements Animal {
  makeSound() {
    return 'Meow!';
  }
}

export default class AnimalFactory {
  createAnimal(type: string): Animal {
    switch (type.toLowerCase()) {
      case 'dog':
        return new Dog();
      case 'cat':
        return new Cat();
      default:
        throw new Error('Animal type not supported');
    }
  }
}
