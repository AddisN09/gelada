# Gelada

A lightweight **JavaScript data structure library** providing core structures like **Stack**, **Queue**, and **Singly Linked List**.  

Designed to be **simple, consistent, and extendable** for long-term use. Perfect for learning, prototyping, or production projects.

---

## ⚡ Installation

```bash
npm install gelada


//## usage example

// Import the library
 import { DS } from "gelada";

/////////////////////////
// Stack Example
/////////////////////////
const stack = new DS.Stack();  Time-complexity=O(1) space-complexity=O(1)
stack.push(10);         Time-complexity=O(1) space-complexity=O(1)
stack.push(20);
stack.push(30);

console.log(stack.peek());    // 30   Time-complexity=O(1) space-complexity=O(1)
console.log(stack.pop());     // 30   Time-complexity=O(1) space-complexity=O(1)
console.log(stack.toArray()); // [10, 20]   Time-complexity=O(n) space-complexity=O(n)

stack.clear();                 Time-complexity=O(1) space-complexity=O(1)
console.log(stack.isEmpty); // true       Time-complexity=O(1) space-complexity=O(1)

/////////////////////////
// Queue Example
/////////////////////////
const queue = new DS.Queue();    Time-complexity=O(1) space-complexity=O(1)
queue.enqueue("a");              Time-complexity=O(1) space-complexity=O(1)
queue.enqueue("b");
queue.enqueue("c");

console.log(queue.peek());    // "a"    Time-complexity=O(1) space-complexity=O(1)
console.log(queue.dequeue()); // "a"     Time-complexity=O(1) space-complexity=O(1)
console.log(queue.toArray()); // ["b", "c"]    Time-complexity=O(n) space-complexity=O(n)

queue.clear();     Time-complexity=O(1) space-complexity=O(1)
console.log(queue.isEmpty); // true        Time-complexity=O(1) space-complexity=O(1)

/////////////////////////
// Singly Linked List Example
/////////////////////////
const list = new DS.SinglyLinkedList();     Time-complexity=O(1) space-complexity=O(1)
list.append(1);            Time-complexity=O(n) space-complexity=O(1)
list.append(3);
list.prepend(0);          Time-complexity=O(1) space-complexity=O(1)

console.log(list.isEmpty);  // false       Time-complexity=O(1) space-complexity=O(1)

console.log(list.toArray()); // [0, 1, 3]

list.insertAt(2, 2);        // insert 2 at index 2       Time-complexity=O(n) space-complexity=O(1)
console.log(list.toArray()); // [0, 1, 2, 3]     Time-complexity=O(n) space-complexity=O(n)

list.insertAt(4, 4);        // insert 4 at index  4      Time-complexity=O(n) space-complexity=O(1)
console.log(list.toArray()); // [0, 1, 2, 3, 4] 

list.insertAt(-1, 0);        // insert 2 at index 2       Time-complexity=O(n) space-complexity=O(1)
console.log(list.toArray()); // [-1, 0, 1, 2, 3, 4] 

list.removeStart();                          Time-complexity=O(1) space-complexity=O(1)
console.log(list.toArray()); //  [0, 1, 2, 3, 4] 

list.removeEnd();                         Time-complexity=O(n) space-complexity=O(1)
console.log(list.toArray()); //  [0, 1, 2, 3]   

list.removeAt(0);                   Time-complexity=O(n) space-complexity=O(1)
console.log(list.toArray()); //   [1, 2, 3]

console.log(list.find(3));    // 3   Time-complexity=O(n) space-complexity=O(1)

list.sort();                                 Time-complexity=O(n) space-complexity=O(n)
console.log(list.toArray()); // [1,2]

list.traverse(value => console.log(value)); // logs 2, 1     Time-complexity=O(n) space-complexity=O(n)


🚀 Features / API (v1)
Stack

push(value) – add an item

pop() – remove and return top item

peek() – view top item

isEmpty – check if empty

size – get current size

toArray() – return array representation

clear() – remove all items

Queue

enqueue(value) – add an item

dequeue() – remove and return front item

peek() – view front item

isEmpty – check if empty

size – get current size

toArray() – return array representation

clear() – remove all items

Singly Linked List

append(value) – add at end

prepend(value) – add at start

insertAt(value, index) – insert at position

removeAt(index) – remove at position

removeStart() – remove first node

removeEnd() – remove last node

removeValue(value) – remove first occurrence

find(value) – find node by value

size – get current size

toArray() – convert list to array

sort() – sort nodes  

traverse(callback) – iterate through nodes and execute callback


 ## 📦 Project Structure

gelada/
├── src/
│   ├── structures/
│   │   ├── linked-list/
│   │   │   └── SinglyLinkedList.js
│   │   ├── stack/
│   │   │   └── Stack.js
│   │   ├── queue/
│   │   │   └── Queue.js
│   ├── errors/
│   │   ├── DSLError.js
│   │   ├── EmptyStructureError.js
│   │   ├── InvalidIndex.js
│   │   ├── InvalidOperationError.js
│   │   └── ValueNotFoundError.js
│   └── index.js      <-- exports everything
├── tests/
├── README.md
└── package.json


MIT License © Addis