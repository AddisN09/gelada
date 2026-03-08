import {AppErrors} from '../../errors/index.js';

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.priv=null;
    }
}

class DoblyLinkedList{
    #head;
    #tail;
    #length;
    constructor(){
       this.#head=null;
       this.#tail=null;
       this.#length=0;
    }
    get isEmpty(){
       const empty=!(this.#head && this.#tail)?true:false;
       return empty;
    }
    get size(){
        return this.#length;
    }
    append(value){
        const newNode=new Node(value);
        if(this.isEmpty){
            this.#head=newNode;
            this.#tail=newNode;
            return ++this.#length;
        }
        let temp=this.#tail;
        temp.next=newNode;
        newNode.priv=temp;
        this.#tail=newNode;
        return ++this.#length;
    }
    prepend(value){
         const newNode=new Node(value);
        if(this.isEmpty){
            this.#head=newNode;
            this.#tail=newNode;
            return ++this.#length;
        }
        let temp=this.#head;
        temp.priv=newNode;
        newNode.next=temp;
        this.#head=newNode;
        return ++this.#length;
    }
    #findNode(index){
        const mid=Math.floor((this.#length)/2);
        if(index<=mid){
            let temp=this.#head;
            for(let i=0;i<index-1;i++){
                temp=temp.next;
            }
            return {
                current:temp,
                right:temp.next
            }
        }
        else{
            let temp=this.#tail;
            for(let i=this.#length;i>index+1;i--){
                temp=temp.priv;
            }
            return {
                current:temp,
                left:temp.priv
            }
        }
    }
    insertAt(value, index){
        if(!Number.isInteger(index)){
            throw new AppErrors.InvalidIndexError(` "${index}"  index value must be integer`);
        }
        if (index < 0 || index > this.#length) {
            throw new AppErrors.InvalidIndexError(` "${index}"  index value must greater or equal to 0 and less or equal to ${this.#length}`);
        }
        if (index === 0) {
            return this.prepend(value);
        }
        else if (index === this.#length) {
            return this.append(value);
        }
        else{
            let node=this.#findNode(index);
             const mid=Math.floor((this.#length)/2);
            if(index<=mid){
                node.current.next=newNode;
                newNode.priv=node.current;
                node.right.priv=newNode;
                newNode.next=node.right;
            }
            else{
                node.current.priv=newNode;
                newNode.next=node.current;
                node.left.next=newNode;
                newNode.priv=node.left;
            }
            return ++this.#length;
        } 
    }
    removeHead(){
        if(this.isEmpty){
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        if(this.#head === this.#tail){
            this.#head=null;
            this.#tail=null;
            return --this.#length;
        }
        let temp=this.#head.next;
        this.#head.next=null;
        temp.priv=null;
        this.#head=temp;
        return --this.#length;

    }
    removeTail(){
         if(this.isEmpty){
            throw new AppErrors.EmptyStructureError(`Operation not permitted on empty ${this.constructor.name}`);
        }
        if(this.#head === this.#tail){
            this.#head=null;
            this.#tail=null;
            return --this.#length;
        }
        let temp=this.#tail.priv;
        this.#tail.priv=null;
        temp.next=null;
        this.#tail=temp;
        return --this.#length;
    }
}