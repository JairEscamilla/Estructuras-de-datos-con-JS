let singlyLinkedList = {
  head: {
    value: 1, 
    next: {
      value: 2,
      next: {
        value: 3,
        next: null
      }
    }
  }
}


class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class MySinglyLinkedList{
  constructor(value){
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }
}