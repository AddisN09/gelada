import {DSError} from './DSError.js';

class InvalidOperatorError extends DSError{
    constructor(message){
        super(message);
        this.name=this.constructor.name;
    }
}

export {InvalidOperatorError};