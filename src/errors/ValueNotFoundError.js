import {DSError} from './DSError.js';

class ValueNotFoundError extends DSError{
    constructor(message){
        super(message);
        this.name=this.constructor.name;
    }
}

export {ValueNotFoundError};