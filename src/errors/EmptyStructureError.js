import {DSError} from './DSError.js';

class EmptyStructureError extends DSError{
    constructor(message){
        super(message);
        this.name=this.constructor.name;
    }
}
export {EmptyStructureError};