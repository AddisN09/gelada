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
}