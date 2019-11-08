# Working with Linked Lists answers

## 1, 2 and 3

See [linkedlist.js](./linkedlist.js)

## 4. Mystery Program

```javascript
function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      } else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
```

The mystery program takes a single linked list and iterates through it with a while loop - while there are items, and so long as the item has an item after it, it checks whether or not the value of the current item is equal to the value of the next one. If it is, it trims it out. It does this by setting the 'next' key of the node following current as the item after the node it wants to trim out; otherwise it continues to iterate. Therefore, this function removes nodes with redundant values from the list.