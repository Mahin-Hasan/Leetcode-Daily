//* Array implementation

class Queue {
  constructor() {
    this.items = [];
  }
  //* o(1) | constant time
  enqueue(value) {
    this.items.push(value);
  }
  //* o(n) | leaner time
  dequque() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
  //* o(1)
  isEmpty() {
    return this.items.length === 0;
  }
  //* 0(n)
  print() {
    console.log("Start -> ", this.items.join("->"), "-> End");
  }
}
const queue = new Queue();

console.log(queue.peek());
console.log(queue.isEmpty());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // 10->20->30

console.log(queue.peek());
console.log(queue.dequque());
queue.print(); // 20->30
