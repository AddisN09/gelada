# Gelada

A lightweight **JavaScript data structure library** providing core structures like **Stack**, **Queue**, and **Singly Linked List**.  

Designed to be **simple, consistent, and extendable** for long-term use. Perfect for learning, prototyping, or production projects.

---

## ⚡ Installation

```bash
npm install gelada


//## usage example

// Import the library
import { Stack, Queue, SinglyLinkedList } from "gelada";

/////////////////////////
// Stack Example
/////////////////////////
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());    // 30
console.log(stack.pop());     // 30
console.log(stack.toArray()); // [10, 20]

stack.clear();
console.log(stack.isEmpty()); // true

/////////////////////////
// Queue Example
/////////////////////////
const queue = new Queue();
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");

console.log(queue.peek());    // "a"
console.log(queue.dequeue()); // "a"
console.log(queue.toArray()); // ["b", "c"]

queue.clear();
console.log(queue.isEmpty()); // true

/////////////////////////
// Singly Linked List Example
/////////////////////////
const list = new SinglyLinkedList();
list.append(1);
list.append(3);
list.prepend(0);

console.log(list.toArray()); // [0, 1, 3]

list.insertAt(2, 2);        // insert 2 at index 2
console.log(list.toArray()); // [0, 1, 2, 3]

list.removeStart();
console.log(list.toArray()); // [1, 2]

list.removeEnd();
console.log(list.toArray()); // [1, 2]

list.sort((a, b) => b - a);  // sort descending
console.log(list.toArray()); // [2, 1]

list.traverse(value => console.log(value)); // logs 2, 1


🚀 Features / API (v1)
Stack

push(value) – add an item

pop() – remove and return top item

peek() – view top item

isEmpty() – check if empty

size() – get current size

toArray() – return array representation

clear() – remove all items

Queue

enqueue(value) – add an item

dequeue() – remove and return front item

peek() – view front item

isEmpty() – check if empty

size() – get current size

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

size() – get current size

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


MIT License © Addis Negash