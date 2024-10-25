import {
  CreditCardProcessor,
  PayPalProcessor,
  PaymentService,
} from './cc-solid.ts';
import {
  errorCallback,
  EventEmitter,
  saveCallback,
  deleteCallback,
} from './event-system.ts';
import AnimalFactory from './factory.ts';
import DatabaseConnection from './singleton.ts';

export async function run() {
  // Teste SOLID
  console.log('==== SOLID ====');
  const cardService = new PaymentService(new CreditCardProcessor());
  const creditCard = await cardService.makePayment(10);
  console.log('Credit Card', creditCard);

  const payPalService = new PaymentService(new PayPalProcessor());
  const payPal = await payPalService.makePayment(20);
  console.log('PayPal', payPal);

  // Teste factory
  console.log('==== Factory ====');
  const animal = new AnimalFactory();
  const dog = animal.createAnimal('dog');
  console.log('Cachorro:', dog.makeSound());
  const cat = animal.createAnimal('cat');
  console.log('Gato:', cat.makeSound());

  // Teste singleton
  console.log('==== Singleton ====');
  const database = DatabaseConnection.getInstance();
  const connection = database.connect();
  const otherConnection = database.connect();
  console.log('é a mesma conexão?', connection === otherConnection);
  console.log('conexão 1', connection);
  console.log('conexão 2', otherConnection);

  // Teste event system
  console.log('==== Event system ====');
  console.log('Subscribe');
  const eventEmitter = new EventEmitter();
  eventEmitter.subscribe('save', saveCallback);
  eventEmitter.subscribe('delete', deleteCallback);

  console.log('Emit');
  eventEmitter.emit('save', { name: 'Foo', email: 'foo@bar.com' });
  eventEmitter.emit('delete', { name: 'Bar', email: 'bar@foo.com' });

  console.log('Unsubscribe');
  // apenas o evento deleted vai executar novamente
  eventEmitter.unsubscribe('save', saveCallback);

  console.log('Unsubscribe all events');
  eventEmitter.subscribe('error', errorCallback);
  eventEmitter.emit('error', 'connect refused');

  //remove os eventos: save e error
  eventEmitter.unsubscribeAll(['save', 'error']);
  // apenas o delete será processado
  eventEmitter.emit('save', 'Foo');
  eventEmitter.emit('error', 'Bar');
  eventEmitter.emit('delete', 'FooBar');
}
