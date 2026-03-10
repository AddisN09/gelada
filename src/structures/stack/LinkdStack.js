import {SinglyLinkedList} from '../linked-list/SinglyLinkedList.js';
import { DSError } from '../../errors/DSError.js';
class LinkedStack{
    #stack;
    constructor(){
        this.#stack=new SinglyLinkedList();
    }
    get isEmpty(){
        return this.#stack.isEmpty;
    }
    push(value){
        this.#stack.prepend(value);
        return this.#stack.size;
    }
}