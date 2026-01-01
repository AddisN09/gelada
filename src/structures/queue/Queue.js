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
}