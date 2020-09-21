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
  }

  insertHead(value) {
    let newValue = new Node(value);
    if (this.head === null) {
      this.head = newValue;
      this.tail = newValue;
    } else {
      let tempHead = this.head;
      this.head = newValue;
      this.head.next = tempHead;
    }
  }
}

export default LinkedList;

// let test = new LinkedList();

// test.insertHead(1);

// console.log('test', test);
