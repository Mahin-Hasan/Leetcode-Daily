// Linked list Implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      // Check if the linked list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Linked list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      // Check if the linked list is empty
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Linked list is not empty
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("Index out of bounds");
      return undefined;
    }
    // if the insert is at the start of the linkedlist || head
    if (index === 0) {
      return this.prepend(value);
    }
    if (index === this.length) {
      return this.append(value);
    }

    // if the insert is in the middle

    //find the leading node
    const leadingNode = this._travarseToIndex(index - 1);
    const holdingNode = leadingNode.next;

    const newNode = new Node(value);
    leadingNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
  }

  remove(index) {
    if (index === 0) {
      const removedItem = this.head.value;
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return removedItem;
    }

    const leadingNode = this._travarseToIndex(index - 1);
    const nodeToRemove = leadingNode.next;
    leadingNode.next = nodeToRemove.next;
    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }
    // this.length--;
  }

  //* private helper function
  _travarseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (count < index) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  print() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join(" -> "), "-> null");
  }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

linkedList.prepend(1);
linkedList.prepend(2);
linkedList.prepend(3);

// linkedList.insert(2, 100);
linkedList.print();

const linkedListThis = new LinkedList();
linkedListThis.append(10).append(20).append(30); // Method chaining but need to use return this in append method

linkedListThis.print();

//check remove method
const linkedListRemove = new LinkedList();
linkedListRemove.append("A").append("B").append("c").append("D");
linkedListRemove.print();

linkedListRemove.remove(2);
linkedListRemove.print();

linkedListRemove.remove(0);
linkedListRemove.print();
