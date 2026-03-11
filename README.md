 # Gelada

A lightweight **JavaScript data structure library** providing core structures like **Stack**, **Queue**, and **Singly Linked List**.

Designed to be **simple, consistent, and extendable** for long-term use.
Perfect for **learning, prototyping, or production projects**.

---

## ⚡ Installation

```bash
npm install gelada
```

---

## 📖 Usage

```javascript
import { DS } from "gelada";

/////////////////////////
// Stack Example
/////////////////////////

const stack = new DS.Stack(); // Time: O(1), Space: O(1)

stack.push(10); // Time: O(1), Space: O(1)
stack.push(20);
stack.push(30);

console.log(stack.peek());    // 30  | Time: O(1), Space: O(1)
console.log(stack.pop());     // 30  | Time: O(1), Space: O(1)
console.log(stack.toArray()); // [10,20] | Time: O(n), Space: O(n)

stack.clear(); // Time: O(1), Space: O(1)
console.log(stack.isEmpty); // true | Time: O(1), Space: O(1)


/////////////////////////
// Queue Example
/////////////////////////

const queue = new DS.Queue(); // Time: O(1), Space: O(1)

queue.enqueue("a"); // Time: O(1), Space: O(1)
queue.enqueue("b");
queue.enqueue("c");

console.log(queue.peek());    // "a" | Time: O(1)
console.log(queue.dequeue()); // "a" | Time: O(1)
console.log(queue.toArray()); // ["b","c"] | Time: O(n)

queue.clear(); // Time: O(1)
console.log(queue.isEmpty); // true


/////////////////////////
// Singly Linked List Example
/////////////////////////

const list = new DS.SinglyLinkedList(); // Time: O(1), Space: O(1)

list.append(1); // Time: O(n)  Space: O(1)
list.append(3);
list.prepend(0); // Time: O(1)  Space: O(1)

console.log(list.isEmpty); // false
console.log(list.toArray()); // [0,1,3] | Time: O(n) Space: O(n)

list.insertAt(2, 2); // Time: O(n)  Space: O(1)
console.log(list.toArray()); // [0,1,2,3]

list.insertAt(4, 4); // Time: O(n)  Space: O(1)
console.log(list.toArray()); // [0,1,2,3,4]

list.insertAt(-1, 0); // Time: O(n)   Space: O(1)
console.log(list.toArray()); // [-1,0,1,2,3,4]

list.removeStart(); // Time: O(1)    Space: O(1)
console.log(list.toArray()); // [0,1,2,3,4]

list.removeEnd(); // Time: O(n)   Space: O(1)
console.log(list.toArray()); // [0,1,2,3]

list.removeAt(0); // Time: O(n)   Space: O(1)
console.log(list.toArray()); // [1,2,3]

console.log(list.find(3)); // Time: O(n)   Space: O(1)

list.sort(); // Time: O(n)   Space: O(n)
console.log(list.toArray());

list.traverse(value => console.log(value)); // Time: O(n)  Space: O(n)
```

---

## 🚀 Features / API

### Stack

* `push(value)` – add an item
* `pop()` – remove and return the top item
* `peek()` – view the top item
* `isEmpty` – check if empty
* `size` – get current size
* `toArray()` – return array representation
* `clear()` – remove all items

### Queue

* `enqueue(value)` – add an item
* `dequeue()` – remove and return the front item
* `peek()` – view front item
* `isEmpty` – check if empty
* `size` – get current size
* `toArray()` – return array representation
* `clear()` – remove all items

### Singly Linked List

* `append(value)` – add at end
* `prepend(value)` – add at start
* `insertAt(value, index)` – insert at position
* `removeAt(index)` – remove at position
* `removeStart()` – remove first node
* `removeEnd()` – remove last node
* `removeValue(value)` – remove first occurrence
* `find(value)` – find node by value
* `size` – get current size
* `toArray()` – convert list to array
* `sort()` – sort nodes
* `traverse(callback)` – iterate and execute callback

---

## 📦 Project Structure

```
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
│   └── index.js
├── tests/
├── README.md
└── package.json
```

---

## 📄 License

MIT License © Addis Negash
