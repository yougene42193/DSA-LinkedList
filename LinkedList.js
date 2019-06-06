'use strict';

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
    if(this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(before, item) {
    if (!this.head) {
      console.log('List is empty');
      return;
    }
    let previousNode = this.head;
    let currentNode = this.head;

    if (this.head.value === before) {
      this.insertFirst(item);
      return;
    }

    while ((currentNode !== null) && (currentNode.value !== before)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return;
    } else {
      previousNode.next = new _Node(item, currentNode);
    }
  }

  insertAfter(after, item) {
    if (!this.head) {
      console.log('List is empty');
      return;
    }
    let currentNode = this.head;

    if (this.head.value === after) {
      this.insertLast(item);
      return;
    }
    while ((currentNode !== null) && (currentNode.value !== after)) {
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return;
    } else {
      let newNode = new _Node(item, currentNode.next);
      currentNode.next = newNode;
    }
  }

  insertAt(index, item) {
    if (!this.head) {
      console.log('List is empty');
      return;
    }
    if (index === 0) {
      this.insertFirst(item);
      return;
    }

    let currentNode = this.head;
    let previousNode = this.head;
    let counter = 0;

    while ((counter < index)) {
      counter++;
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    let newNode = new _Node(item, currentNode);
    previousNode.next = newNode;
    currentNode = currentNode.next;
  }

  find(item) {
    let currNode = this.head;

    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
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

    while ((currNode !== null) && (currNode !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

function display(list) {
  let item = list.head;

  while(item) {
    console.log(item.value);
    item = item.next;
  }
}

function size(list) {
  let counter = 0;
  let item = list.head;

  while (item) {
    counter++;
    item = item.next;
  }
  return counter;
}

function isEmpty(list) {
  return (!list.head);
}

function findPrevious(list, searchItem) {
  let item = list.head;
  let previousNode = null;

  while(item) {
    if (item.value === searchItem) {
      return (previousnode) ? previousNode.value : undefined;
    }
    previousNode = item;
    item = previousNode.next;
  }
}

function findLast(list) {
  let item = list.head;

  if (isEmpty(list)) {
    return undefined;
  }
  while(item) {
    if (item.next === null) {
      return item.value;
    }
    item = item.next;
  }
}

function reverseList(list, oldHead=null) {
  if (list.head.next === null) {
    console.log('base case');
    list.head.next = oldHead;
    return list.head;
  }
  let previousHead = list.head;
  list.head = list.head.next;
  previousHead.next = oldHead;
  return reverseList(list, previousHead);
}

function findThirdFromEnd(list) {
  if (!list.head) {
    return console.log('List has no items');
  }
  let listLength = showListSize(list);

  if (listLength <= 2) {
    return console.log('List has 2 or less items');
  }
  let counter = 0;
  let targetIndex = listLength - 3;

  let currentNode = list.head;
  while (counter < targetIndex && currentNode !== null) {
    currentNode = currentNode.next;
    counter++;
  }
  console.log(currentNode.value);
}

function middleOfList(list) {
  let currentNode = list.head;
  let count = 0;
  while (currentNode.next !== null) {
    counter += 1;
    currentNode = currentNode.next;
  }
  currentNode = list.head;
  console.log(count);
  for (let i = 0; i < Math.ceil(count / 2); i++) {
    currentNode = currentNode.next;
  }
  return currentNode.value;
}

function main() {
  const SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena');
  SLL.insertBefore('Boomer');
  SLL.insertAfter('Hotdog');
  SLL.insertAfter('Helo');
  SLL.insertAt(3, 'Kat');
  SLL.remove('Tauhida');
  display(SLL);
  size(SLL);
}

function cycleList(list) {
  if(list.head === null) {
    return new Error('List is empty');
  }

  let tempList = copy(list);
  let fakeNode = 'fake';
  let tempNode = tempList.head;
  let prevNode = null;
  while(tempNode.next !== null) {
    if(tempNode.next === 'fake') {
      return true;
    }
    prevNode = tempNode;
    tempNode = tempNode.next;
    prevNode.next = fakeNode;
  }
  return false;
}

main();
//Mystery program:
/* 
    The program removes duplicates
    uses O(n^2) 
*/