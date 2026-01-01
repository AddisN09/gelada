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
}