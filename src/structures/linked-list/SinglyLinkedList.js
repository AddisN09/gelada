import { AppErrors } from "../../errors/index.js";
 
class Node{
    #value;
    #next;
    constructor(value){
        this.#value=value;
        this.#next=null;
    }
}
class SinglyLinkedList{
    #head;
    #length;
    constructor(){
        this.#head=null;
        this.#length=0;
    }
}

 