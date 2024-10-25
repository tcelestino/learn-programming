// deno-lint-ignore-file
// Observer Pattern (Event System)
export class EventEmitter {
  private listeners: { [key: string]: Function[] } = {};

  subscribe(event: string, callback: Function) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  emit(event: string, data: any) {
    if (!this.listeners[event]) return;
    this.listeners[event].forEach((callback) => callback(data));
  }

  unsubscribe(event: string, callback: Function) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(
      (cb) => cb !== callback
    );
  }

  unsubscribeAll(events: string[]) {
    if (!events.length) return;
    for (const event of events) {
      if (!this.listeners[event]) return;
      this.listeners[event] = [];
      console.log(`Remove event "${event}"`);
    }
  }
}

export function saveCallback(data: any) {
  console.log('Receive', data);
}

export function deleteCallback(data: any) {
  console.log('Deleted', data);
}

export function errorCallback(data: any) {
  console.log('Error', data);
}
