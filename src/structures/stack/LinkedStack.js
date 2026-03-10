import {SinglyLinkedList} from '../linked-list/SinglyLinkedList.js';
import { AppErrors } from '../../errors/index.js';
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
    pop(){
        try{
            let value=this.#stack.peekStart();
            this.#stack.removeStart();
            return value;
        }
        catch(err){
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
    }
}

 