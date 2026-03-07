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
    
}