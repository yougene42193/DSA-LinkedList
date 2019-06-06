'use strict';

class _Node {
    constructor(value, next, prev) {
        this.value = value,
        this.next = next,
        this.prev = prev;
    }
}

class DLL {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertFirst(item) {
        let newNode = new _Node(item, this.head, null);
        if (this.head !== null) {
            this.head.prev = newNode;
        }
        this.head = newNode;
        if(this.tail === null) {
            this.tail = newNode;
        }
    }

    insertLast(item) {
        let newNode = new _Node(item, null, this.tail);
        if(this.tail !== null) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if(this.head === null) {
            this.head = newNode;
        }
    }

    insertBefore(item, beforeValue) {
        let previousNode = this.head;
        let currNode = this.head;

        while ((currNode !== null) && (currNode.value !== beforeValue)) {
            previousNode = currNode;
            currNode = currNode.next;
        }
        if (currNode === null) {
            console.log('item not found');
            return;
        }

        previousNode.next = new _Node(item, previousNode, currNode);
        currNode.prev = previousNode.next;
    }

    insertAfter(item, AfterValue) {
        let currentNode = this.head;
        let nodeAfterCurrent = this.head;
        if(currentNode.value === AfterValue) {
            nodeAfterCurrent = currentNode.next;
        }
        while((currentNode !== null) && (currentNode.value !== AfterValue)) {
            currentNode = currentNode.next;
            console.log('currentNode', currentNode);
            nodeAfterCurrent = currentNode.next;
            console.log('currentNode:', currentNode);
        }
        if(currentNode === null) {
            console.log('item not found');
            return;
        }
        nodeAfterCurrent.prev = currentNode.next;
        currentNode.next = new _Node(item, currentNode, currentNode.next)
    }

    insertAt(position, item) {
        let currNode = this.head;
        let nextNode = this.head;
        let currentPosition = 1;

        while(currNode !== null && currentPosition !== position) {
            currentPosition++;
            currNode = currNode.next;
            nextNode = currNode;
        }

        currNode.next = new _Node(item,currNode.next);
    }
}