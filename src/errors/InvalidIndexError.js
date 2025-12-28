import {DSError} from './DSError.js';

class InvalidIndexError extends DSError{
    constructor(message){
        super(message);
        this.name=this.constructor.name;
    }
}

export {InvalidIndexError};