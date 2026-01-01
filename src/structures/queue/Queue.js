import { AppErrors } from "../../errors/index.js";

class Queue{
    #queue;
    #front;
    #rear;
    constructor(){
        this.#queue=[];
        this.#front=0;
        this.#rear=0;
    }
    get isEmpty(){
        if(this.#front===this.#rear){
            return true;
        }
        return false;
    }
    enqueue(value){
        this.#queue[this.#rear]=value;
        ++this.#rear;
    }
    dequeue(){
        if(this.isEmpty){
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`)
        }
        let dequeuedValue=this.#queue[this.#front];
        this.#queue[this.#front]=null;
        ++this.#front;
        return dequeuedValue;
    }
    peek(){
        if(this.isEmpty){
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`)
        }
         let dequeuedValue=this.#queue[this.#front];
         return dequeuedValue;
    }
    toArray(){
        let store=[];
        for(let i=this.#front;i<this.#rear;i++){
            store.push(this.#queue[i]);
        }
        return store;
    }
}
 