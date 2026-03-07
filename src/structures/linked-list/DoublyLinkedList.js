import {AppErrors} from '../../errors/index.js';

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.priv=null;
    }
}

class DoblyLinkedList{
    #head;
    #tail;
    #length;
    constructor(){
       this.#head=null;
       this.#tail=null;
       this.#length=0;
    }
    get isEmpty(){
       const empty=!(this.#head && this.#tail)?true:false;
       return empty;
    }
    get size(){
        return this.#length;
    }
    append(value){
        const newNode=new Node(value);
        if(this.isEmpty){
            this.#head=newNode;
            this.#tail=newNode;
            return ++this.#length;
        }
        let temp=this.#tail;
        temp.next=newNode;
        newNode.priv=temp;
        this.#tail=newNode;
        return ++this.#length;
    }
    prepend(value){
         const newNode=new Node(value);
        if(this.isEmpty){
            this.#head=newNode;
            this.#tail=newNode;
            return ++this.#length;
        }
        let temp=this.#head;
        temp.priv=newNode;
        newNode.next=temp;
        this.#head=newNode;
        return ++this.#length;
    }
}