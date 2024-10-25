// Rate Limiter
export default class RateLimiter {
  private requests: Map<string, number[]>;
  private windowSize: number;
  private maxRequests: number;

  constructor(windowSize: number, maxRequests: number) {
    this.requests = new Map();
    this.windowSize = windowSize;
    this.maxRequests = maxRequests;
  }

  isAllowed(userId: string): boolean {
    const now = Date.now();
    const userRequests = this.requests.get(userId) || [];

    // Remove expired timestamps
    const validRequests = userRequests.filter(
      (timestamp) => now - timestamp < this.windowSize
    );

    if (validRequests.length < this.maxRequests) {
      validRequests.push(now);
      this.requests.set(userId, validRequests);
      return true;
    }

    return false;
  }
}

function isAllowed(user: string, total = 6) {
  for (let index = 0; index < total; index++) {
    console.log(rateLimiter.isAllowed(user));
  }
}

const timeout = 60 * 1000;
const rateLimiter = new RateLimiter(timeout, 5);
const user = 'Foo';
const otherUser = 'Bar';
isAllowed(user);
isAllowed(otherUser, 2);

setTimeout(() => {
  console.log(rateLimiter.isAllowed(user));
}, timeout);
