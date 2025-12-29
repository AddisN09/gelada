import { AppErrors } from "../../errors/index.js";
 
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class SinglyLinkedList{
    #head;
    #length;
    constructor(){
        this.#head=null;
        this.#length=0;
    }
    get isEmpty(){
        if(!this.#head){
            return true;
        }
        return false;
    }
    append(value){
        const newNode=new Node(value);
        if(this.isEmpty){
           this.#head=newNode;
        }
        else{
            let temp=this.#head;
            while(temp.next){
                temp=temp.next;
            }
            temp.next=newNode;
        }
        return ++this.#length;
    }
   prepend(value){
    const newNode=new Node(value);
    newNode.next=this.#head;
    this.#head=newNode;
    return ++this.#length;
   }
}
 