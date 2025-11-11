"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root;
    tail;
    length = 0;
    add(value) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    getNumberOfElements() {
        return this.length;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const numberList = new LinkedList();
numberList.getNumberOfElements();
numberList.add(1);
numberList.add(2);
console.log(numberList.getNumberOfElements());
numberList.print();
//list.length; // Error: Property 'length' is private and only accessible within class 'LinkedList'.
const nameList = new LinkedList();
//# sourceMappingURL=linked-list.js.map