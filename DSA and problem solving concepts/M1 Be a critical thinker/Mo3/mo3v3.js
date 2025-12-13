class Stack {
    constructor() {
        this.items = []
    }
    //* o(1)
    push(value) {
        this.items.push(value)
    }
    //* o(1)
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.items.length - 1]
    }
    //* o(1)
    isEmpty() {
        return this.items.length === 0
    }
    //* 0(n)
    print() {
        console.log(this.items.slice().reverse().join("->"));
    }
}
const stack = new Stack();

console.log(stack.peek());
console.log(stack.isEmpty());

stack.push(10)
stack.push(20)
stack.push(30)
stack.print() // 15->10->5

console.log(stack.peek());
console.log(stack.pop());
stack.print() // 15->10
