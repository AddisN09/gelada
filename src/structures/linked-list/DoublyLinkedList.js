import { AppErrors } from '../../errors/index.js';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.priv = null;
        this.priority = null;
    }
}

class DoblyLinkedList {
    #head;
    #tail;
    #length;
    constructor() {
        this.#head = null;
        this.#tail = null;
        this.#length = 0;
    }
    get isEmpty() {
        const empty = !(this.#head && this.#tail) ? true : false;
        return empty;
    }
    get size() {
        return this.#length;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty) {
            this.#head = newNode;
            this.#tail = newNode;
            return ++this.#length;
        }
        let temp = this.#tail;
        temp.next = newNode;
        newNode.priv = temp;
        this.#tail = newNode;
        return ++this.#length;
    }
    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty) {
            this.#head = newNode;
            this.#tail = newNode;
            return ++this.#length;
        }
        let temp = this.#head;
        temp.priv = newNode;
        newNode.next = temp;
        this.#head = newNode;
        return ++this.#length;
    }
    #findNode(index) {
        const mid = Math.floor((this.#length) / 2);
        if (index <= mid) {
            let temp = this.#head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            return {
                current: temp,
                right: temp.next
            }
        }
        else {
            let temp = this.#tail;
            for (let i = this.#length; i > index + 1; i--) {
                temp = temp.priv;
            }
            return {
                current: temp,
                left: temp.priv
            }
        }
    }
    insertAt(value, index) {
        if (!Number.isInteger(index)) {
            throw new AppErrors.InvalidIndexError(` "${index}"  index value must be integer`);
        }
        if (index < 0 || index > this.#length) {
            throw new AppErrors.InvalidIndexError(` "${index}"  index value must greater or equal to 0 and less or equal to ${this.#length}`);
        }
        if (index === 0) {
            return this.prepend(value);
        }
        else if (index === this.#length) {
            return this.append(value);
        }
        else {
            const newNode = new Node(value);
            let node = this.#findNode(index);
            const mid = Math.floor((this.#length) / 2);
            if (index <= mid) {
                node.current.next = newNode;
                newNode.priv = node.current;
                node.right.priv = newNode;
                newNode.next = node.right;
            }
            else {
                node.current.priv = newNode;
                newNode.next = node.current;
                node.left.next = newNode;
                newNode.priv = node.left;
            }
            return ++this.#length;
        }
    }
    removeHead() {
        if (this.isEmpty) {
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        if (this.#head === this.#tail) {
            this.#head = null;
            this.#tail = null;
            return --this.#length;
        }
        let temp = this.#head.next;
        this.#head.next = null;
        temp.priv = null;
        this.#head = temp;
        return --this.#length;

    }
    removeTail() {
        if (this.isEmpty) {
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        if (this.#head === this.#tail) {
            this.#head = null;
            this.#tail = null;
            return --this.#length;
        }
        let temp = this.#tail.priv;
        this.#tail.priv = null;
        temp.next = null;
        this.#tail = temp;
        return --this.#length;
    }
    removeAt(index) {
        if (!Number.isInteger(index)) {
            throw new AppErrors.InvalidIndexError(` "${index}"  index value must be integer`);
        }
        if (index < 0 || index > this.#length - 1) {
            throw new AppErrors.InvalidIndexError(` "${index}"  index value must greater or equal to 0 and less or equal to ${this.#length - 1}`);
        }
        if (this.isEmpty) {
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        if (index === 0) {
            return this.removeHead();
        }
        if (index === this.#length - 1) {
            return this.removeTail();
        }
        else {
            let node = this.#findNode(index);
            const mid = Math.floor((this.#length) / 2);
            if (index <= mid) {
                let left = node.current.priv;
                node.right.priv = left;
                left.next = node.right;
                node.current.next = null;
                node.current.priv = null;
            }
            else {
                let right = node.current.next;
                node.left.next = right;
                right.priv = node.left;
                node.current.next = null;
                node.current.priv = null;
            }
            return --this.#length;
        }
    }
    #removeNode(right, left, current) {
        if (left && right) {
            left.next = right;
            right.priv = left;
        }
        else if (!left) {
            right.priv = left;
            this.#head = right;
        }
        else {
            left.next = right;
            this.#tail = left;
        }
        current.next = null;
        current.priv = null;
        return --this.#length;
    }
    removeValue(value, startingPoint) {
        if (this.isEmpty) {
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        let type = typeof startingPoint;
        if (!(type === 'string')) {
            throw new AppErrors.ValueTypeError(` "${startingPoint}" : The startingPoint argument type must be string`);
        }
        if (startingPoint === 'Head') {
            let temp = this.#head;
            while (temp) {
                if (temp.value === value) {
                    break;
                }
                temp = temp.next;
            }
            if (!temp) {
                throw new AppErrors.ValueNotFoundError(` ${value} not found in this ${this.constructor.name}`);
            }
            let left = temp.priv;
            let right = temp.next;
            return this.#removeNode(right, left, temp);
        }
        if (startingPoint === 'Tail') {
            let temp = this.#tail;
            while (temp) {
                if (temp.value === value) {
                    break;
                }
                temp = temp.priv;
            }
            if (!temp) {
                throw new AppErrors.ValueNotFoundError(` ${value} not found in this ${this.constructor.name}`);
            }
            let left = temp.priv;
            let right = temp.next;
            return this.#removeNode(right, left, temp);
        }
    }
    toArray(startingPoint) {
        let type = typeof startingPoint;
        if (!(type === 'string')) {
            throw new AppErrors.ValueTypeError(` "${startingPoint}" : The startingPoint argument type must be string`);
        }
        let store = [];
        if (startingPoint === 'Head') {
            let temp = this.#head;
            while (temp) {
                store.push(temp.value);
                temp = temp.next;
            }
        }
        if (startingPoint === 'Tail') {
            let temp = this.#tail;
            while (temp) {
                store.push(temp.value);
                temp = temp.priv;
            }
        }
        return store;
    }
    find(value, startingPoint) {
        if (this.isEmpty) {
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        let type = typeof startingPoint;
        if (!(type === 'string')) {
            throw new AppErrors.ValueTypeError(` "${startingPoint}" : The startingPoint argument type must be string`);
        }
        if (startingPoint === 'Head') {
            let temp = this.#head;
            while (temp) {
                if (temp.value === value) {
                    return temp.value;
                }
                temp = temp.next;
            }
        }
        if (!temp) {
            throw new AppErrors.ValueNotFoundError(` ${value} not found in this ${this.constructor.name}`);
        }
        if (startingPoint === 'Tail') {
            let temp = this.#tail;
            while (temp) {
                if (temp.value === value) {
                    return temp.value;
                }
                temp = temp.priv;
            }
            if (!temp) {
                throw new AppErrors.ValueNotFoundError(` ${value} not found in this ${this.constructor.name}`);
            }
        }
    }
    #findMid(start, end) {
        let slow = start;
        let fast = start.next;
        while (fast && fast.next) {
            fast = fast.next.next;
            slow = slow.next;
        }
        return slow;
    }
    #merge(left, right) {
        let dummy = new Node(0);
        let temp = dummy;
        while (left && right) {
            if (left.value < right.value) {
                temp.next = left;
                left.priv = temp;
                left = left.next;
            }
            else {
                temp.next = right;
                right.priv = temp;
                right = right.next;
            }
            temp = temp.next;
        }
        let rest = left || right;
        while (rest) {
            temp.next = rest;
            rest.priv = temp;
            rest = rest.next;
        }

        this.#head = dummy.next;
        if (this.#head) this.#head.priv = null;
        this.#tail = temp;
    }
    sort(start = this.#head, end = this.#tail) {
        if (start === end) return this.#head;
        let mid = this.#findMid(start, end);
        let rightEnd = mid.next;
        mid.next = null;
        if (rightEnd) rightEnd.priv = null;
        let left = sort(start, mid);
        let right = sort(rightEnd, end);
        this.#merge(left, right);
    }
    clear(){
        this.#head=null;
        this.#tail=null;
    }
    peekStartValue(){
        if(this.isEmpty){
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        return this.#head.value;
    }
}

