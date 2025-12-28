import {AppErrors} from '../../errors/index.js';
class Stack{
    #stack;
    constructor(){
        this.#stack=[];
    }
    get isEmpty(){
         if(!this.#stack.length){
            return true;
         }
         return false;
    }
    push(value){
        this.#stack.push(value);
        return this.#stack.length;
    }
}
  