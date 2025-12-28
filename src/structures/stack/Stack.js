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
    pop(){
        if(this.isEmpty){
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        let data=this.#stack.pop();
        return data;
    }
}
 