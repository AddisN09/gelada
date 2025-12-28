import { AppErrors } from "../../errors/index.js";
 
class Node{
    #value;
    constructor(value){
        this.#value=value;
        this.length=0;
    }
}