import {AppErrors} from '../../errors/index.js';

class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.priv=null;
    }
}