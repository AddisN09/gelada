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
         return this.#front===this.#rear;
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
        this.#queue[this.#front]=undefined;
        ++this.#front;
        if(this.#front===this.#rear){
            this.clear();
        }
        return dequeuedValue;
    }
    peek(){
        if(this.isEmpty){
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`)
        }
         let peekedValue=this.#queue[this.#front];
         return peekedValue;
    }
    toArray(){
        let store=this.#queue.slice(this.#front);
        return store;
    }
    get size(){
        let queueLength=this.#rear-this.#front;
        return queueLength;
    }
    clear(){
        this.#front=0;
        this.#rear=0;
        this.#queue=[];
    }
}
  
export{Queue};