// SOLID Principles
interface PaymentProcessor {
  process(amount: number): Promise<number>;
}

export class CreditCardProcessor implements PaymentProcessor {
  async process(amount: number): Promise<number> {
    return amount;
  }
}

export class PayPalProcessor implements PaymentProcessor {
  async process(amount: number): Promise<number> {
    return amount + 10;
  }
}

export class PaymentService {
  constructor(private processor: PaymentProcessor) {}

  async makePayment(amount: number): Promise<number | boolean> {
    try {
      return await this.processor.process(amount);
    } catch (error) {
      console.error('Payment failed:', error);
      return false;
    }
  }
}
