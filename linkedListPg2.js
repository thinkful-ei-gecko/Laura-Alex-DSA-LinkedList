
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

  insertBefore(item, aCertainValue) {
    if (!this.head) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let previousNode = this.head;

      while ((currNode !== null) && (currNode.value !== aCertainValue)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log('Value not found');
        return;
      }
      if (currNode.value === aCertainValue) {
        previousNode.next = new _Node(item, currNode);
      }
    }

  }

  insertAfter(item, aCertainValue) {
    if (!this.head) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let previousNode = this.head;

      while ((currNode !== null) && (currNode.value !== aCertainValue)) {
        previousNode = currNode;
        currNode = currNode.next;
      }
      if (currNode === null) {
        console.log('Value not found');
        return;
      }
      if (currNode.value === aCertainValue) {
        let foundNode = currNode;
        foundNode.next = new _Node(item, currNode.next);
      }
    }
  }

  insertAt(item, pos) {
    if (!this.head) {
      this.insertFirst(item);
    }
    else {
      let currNode = this.head;
      let previousNode = this.head;

      for (let i = 1; i <= pos; i++) {
        previousNode = currNode;
        currNode = currNode.next;

        if (i === pos) {
          previousNode.next = new _Node(item, currNode);
        }
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

  findPrevious(value){
    let currentNode = this.head;
    while(currentNode.next.value !== value && currentNode.next.value !== null){
      currentNode = currentNode.next;
    }
    return currentNode;
    }
  }

}


function display(list) {
  let currentNode = list.head;

  while (currentNode !== null) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
  }
}

function size(list) {
  let currentNode = list.head;
  let counter = 0;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    counter++;
  }
  console.log(counter);
}

function isEmpty(list) {
  if (list.head === null) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function findPrevious(list, item) {
  let currentNode = list.head;
  let previousNode = list.head;

  if (list.head === item) {
    return null;
  }

  while (currentNode.value !== item && currentNode.next !== null) {
    currentNode = currentNode.next;
    if (currentNode.value === item) {
      console.log(previousNode.value);
    }
    previousNode = currentNode;
  }
}

function findLast(list) {
  let currentNode = list.head;

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  if (currentNode.next === null) {
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
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

  // display(SLL);
  // size(SLL);
  // isEmpty(SLL);
  // findPrevious(SLL, 'Starbuck');
  console.log(findLast(SLL));
}
//main();

function compareLists (list1, list2) { 
  let node1 = list1.head;
  let node2 = list2.head;    
  // Move ahead while values match and lists not ended 
  while (node1 !== null && node2 !== null && node1.value === node2.value) {          
    node1 = node1.next; 
    node2 = node2.next; 
  } 
  //  If lists not ended, compare mismatching characters
  if (node1 !== null && node2 !== null) {
    return (node1.value > node2.value) ? 1 : -1; 
  }
  // If a list has reached the end 
  if (node1 !== null && node2 === null) return 1; 
  if (node2 !== null && node1 === null) return -1; 
  // Otherwise, both lists have ended and are equal
  return 0; 
}

function runLists() {
  let listOne = new LinkedList();
  let listTwo = new LinkedList();
  let listThree = new LinkedList();
  let listFour = new LinkedList();

  listOne.insertFirst('c');
  listOne.insertLast('h');
  listOne.insertLast('i');
  listOne.insertLast('c');
  listOne.insertLast('o');
  listOne.insertLast('s');

  listTwo.insertFirst('c');
  listTwo.insertLast('h');
  listTwo.insertLast('i');
  listTwo.insertLast('c');
  listTwo.insertLast('a');

  listThree.insertFirst('c');
  listThree.insertLast('h');
  listThree.insertLast('i');
  listThree.insertLast('c');
  listThree.insertLast('o');
  
  listFour.insertFirst('c');
  listFour.insertLast('h');
  listFour.insertLast('i');
  listFour.insertLast('c');
  listFour.insertLast('o');

  console.log(compareLists(listOne, listTwo));
  console.log(compareLists(listOne, listThree));
  console.log(compareLists(listTwo, listThree));
  console.log(compareLists(listFour, listThree));
}
//runLists();

function duplicateRemover(list){
  let currentNode = list.head;
  while(currentNode !== null && currentNode.next !== null){
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    }
    else{
      currentNode = currentNode.next;
    }
  }
  display(list);
}


function duplicateRemover1(list){
  let currentNode = list.head;
  while(currentNode !== null){
    let tempNode = currentNode;
    while (tempNode.next !== null) {
      if (tempNode.next.value === currentNode.value) {
        tempNode.next = tempNode.next.next;
      }
      else{
        tempNode = tempNode.next;
      }
    }
    currentNode = currentNode.next;
  }
  display(list);
}


function runDuplicateLists(){
  let letterList = new LinkedList();
  let numberList = new LinkedList();
  let word = new LinkedList();

  word.insertFirst('c');
  word.insertLast('h');
  word.insertLast('i');
  word.insertLast('c');
  word.insertLast('o');

  letterList.insertFirst('a');
  letterList.insertLast('b');
  letterList.insertLast('b');
  letterList.insertLast('b');
  letterList.insertLast('c');
  letterList.insertLast('c');
  letterList.insertLast('d');
  letterList.insertLast('d');
  letterList.insertLast('d');

  numberList.insertFirst('1');
  numberList.insertLast('1');
  numberList.insertLast('1');
  numberList.insertLast('2');
  numberList.insertLast('2');
  numberList.insertLast('3');
  numberList.insertLast('4');

  duplicateRemover1(letterList);
  duplicateRemover1(numberList);
  duplicateRemover1(word);
}
//runDuplicateLists();

function reverser(list){
  let listB = new LinkedList();
  let node = list.head;
  while(node !== null){
    listB.insertFirst(node.value);
    node = node.next;
  }
  display(listB);
}

function thirdFromEnd(list) {
  let tempNode = list.head;
  let destination = tempNode.next.next.next;
  while(destination !== null) {
    tempNode = tempNode.next;
    destination = destination.next;
  }
  return tempNode.value;
}

function middleOfList(list) {
  let endScout = list.head;
  let middleScout = list.head;
  while(endScout !== null) {
    endScout = endScout.next.next;
    middleScout = middleScout.next;
  }
  return middleScout.value;
}


function playList(){
  let listA = new LinkedList();

  listA.insertLast('l');
  listA.insertLast('a');
  listA.insertLast('u');
  listA.insertLast('r');
  listA.insertLast('a');
  listA.insertLast('e');
  listA.insertLast('l');
  listA.insertLast('i');
  listA.insertLast('a');
  listA.insertLast('s');
  
  display(listA);
  console.log(thirdFromEnd(listA), 'found 3rd from end');
  console.log(middleOfList(listA), 'found the middle');
  reverser(listA);
}

playList();




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