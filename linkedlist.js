/*1. Create a linked list class
Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find) from scratch.*/

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key){
    if(!this.head){
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let previousNode = this.head;
      while ((currNode !== null) && (currNode.value !== key)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log('Item not found');
        return;
      }
      if (currNode.value === key) {
        previousNode.next = new _Node(item, currNode.next);
      }
    }

  }

  insertAfter(item, key){
    if(!this.head){
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let previousNode = this.head;
      while ((currNode !== null) && (currNode.value !== key)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log('Item not found');
        return;
      }
      if (currNode.value === key) {
        let foundNode = currNode;
        let afterNode = currNode.next;

        foundNode.next = new _Node(item, afterNode.next);
      }
    }
  }


  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;
    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  find(item) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currentNode.value !== item) {
      if (currentNode === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
}

function main() {
  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
 // SLL.remove('Squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter("Hotdog", "Helo");
  console.log(SLL.find('Hotdog'));
  console.log(SLL.find('Husker'));
  console.log(SLL.find('Boomer'));

}
console.log(main());
// find(item) {
//   let currentNode = this.head;
//   if (!this.head) {
//     return 'No items in list';
//   }
//   while (currentNode.next !== null && currentNode.value !== item) {
//     currentNode = currentNode.next;
//   }
//   if (currentNode === null) {
//     return null;
//   }
//   if (currentNode.value === item) {
//     return currentNode;
//   }
// }