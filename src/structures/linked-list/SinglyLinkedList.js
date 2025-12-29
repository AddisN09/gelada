import { AppErrors } from "../../errors/index.js";

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    #head;
    #length;
    constructor() {
        this.#head = null;
        this.#length = 0;
    }
    get isEmpty() {
        if (!this.#head) {
            return true;
        }
        return false;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty) {
            this.#head = newNode;
        }
        else {
            let temp = this.#head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        return ++this.#length;
    }
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.#head;
        this.#head = newNode;
        return ++this.#length;
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
            let temp = this.#head;
            for (let i = 0; i < index - 1; i++) {
                temp = temp.next;
            }
            newNode.next = temp.next;
            temp.next = newNode;
            return ++this.#length;
        }
    }
    removeStart() {
        if (this.isEmpty) {
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        let removedValue = this.#head.value;
        this.#head = this.#head.next;
        --this.#length;
        return removedValue;
    }
    removeEnd() {
        if (this.isEmpty) {
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        let temp=this.#head;
        let priv=null;
        while(temp.next){
            priv=temp;
            temp=temp.next;
        }
        if(priv){
            let removedValue=priv.next.value;
            priv.next=null;
            --this.#length;
            return removedValue;
        }
        else{
            let removedValue=temp.value;
            this.#head=null;
            temp=null;
            --this.#length;
            return removedValue;
        }
    }
     removeAt(index){
        if(!Number.isInteger(index)){
            throw new AppErrors.InvalidIndexError(` "${index}"  index value must be integer`);
        }
        if (index < 0 || index > this.#length-1) {
            throw new AppErrors.InvalidIndexError(` "${index}"  index value must greater or equal to 0 and less or equal to ${this.#length-1}`);
        }
        if (this.isEmpty) {
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        if(index===0){
            return this.removeStart();
        }
        else if(index===this.#length-1){
            return this.removeEnd();
        }
        else{
            let temp=this.#head;
            let priv=null;
            for(let i=0; i<index; i++){
                priv=temp;
                temp=temp.next;
            }
            let removedValue=temp.value;
            priv=temp.next;
            temp=null;
            --this.#length;
            return removedValue;
        }
    }
    removeValue(value){
         if (this.isEmpty) {
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        let temp=this.#head;
        let priv=null;
        while(temp){
            if(temp.value===value){
                break;
            }
            priv=temp;
            temp=temp.next;
        }
        if(!temp){
            throw new AppErrors.ValueNotFoundError(` ${value} not found in this ${this.constructor.name}`);
        }
        if(priv){
            let removedValue=temp.value;
            priv.next=temp.next; 
            temp=null;
            --this.#length;
            return removedValue;
        }
        else{
            let removedValue=this.#head.value;
            this.#head=this.#head.next;
            temp=null;
            --this.#length;
            return removedValue;
        }
    }
}
   