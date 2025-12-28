import { AppErrors } from "../../errors/index.js";
 
class Node{
    #value;
    #next;
    constructor(value){
        this.#value=value;
        this.#next=null;
    }
}

 