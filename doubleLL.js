
class _Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoubleLL {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(item){
    let newNode = new _Node(item, this.head, null);
    if(this.head !== null ){
      this.head.prev = newNode;
    } 
    this.head = newNode;
    if(this.tail === null){ 
      this.tail = newNode;
    }
  }
  insertLast(newValue){
    let newNode = new _Node(newValue, null, this.tail);
    if(this.tail !== null){
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if(this.head === null ){
      this.head = newNode;
    } 
  }  
  insertAfter(newValue, insertPositionValue){ 
    let currentNode = this.head;
    while(currentNode.value !== insertPositionValue){
      if(currentNode === null){
        console.log('Item not found');
        return;
      } 
      currentNode = currentNode.next;
    }
    if(currentNode === this.tail){
      insertLast(newValue);
    } 
    else{
      let newNode = new _Node(newValue, currentNode.next, currentNode); 
      newNode.next.prev = newNode; 
      currentNode.next = newNode; 
    }
  }
  remove(searchValue){
    //first find it
    if (!this.head){ return null; }

    let current = this.head;
    while(current.value !== searchValue){
      current = current.next;
      if(current === null){
        console.log('Item to remove is not on the list');
        return null;
      }   
    }
    //next remove it
    //if it is the head, make the next node head
    if(current === this.head){
      this.head = current.next;
      return;
    } 
    //if deleting last node
    if(current === this.tail){
      this.tail = current.prev;
      current.prev.next = null;
      return;
    } 
    current.prev.next = current.next;
    current.next.prev = current.prev;
  }
}  


function displayList(list){
  let currNode = list.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function sizeFinder(list){
  let counter = 0;
  let currNode = list.head;
  if(!currNode){
    return counter;
  }
  else
    counter++;
  while (!(currNode.next === null)) {
    counter++;
    currNode = currNode.next;
  }
  return counter;
}

function reverseDblLL(list) {
  let currNode = list.head;
  let tempNode = null;

  while (currNode !== null) {
    //swapping nodes
    tempNode = currNode.next;
    currNode.next = currNode.prev;
    currNode.prev = tempNode;
    currNode = tempNode;
  }
  tempNode = list.head;
  list.head = list.tail;
  list.tail = tempNode;
}
    
function main(){
  let DLL = new DoubleLL();
  DLL.insertFirst('Eeny');        
  DLL.insertLast('Meeny');
  DLL.insertLast('Miney');
  DLL.insertLast('Pong');
  DLL.insertLast('Moe');
  DLL.insertAfter('Ping', 'Miney');

  displayList(DLL);
  console.log(sizeFinder(DLL));
  reverseDblLL(DLL);
  displayList(DLL);  
  console.log(sizeFinder(DLL));

  DLL.remove('Pong');
  displayList(DLL);  
  console.log(sizeFinder(DLL));
  DLL.remove('Ping');
  reverseDblLL(DLL);
  displayList(DLL);  
}
main();

