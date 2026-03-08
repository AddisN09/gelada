import { DSError } from "./DSError";

class ValueTypeError extends DSError{
    constructor(message){
        super(message);
        this.name=this.constructor.name;
    }
}
export {ValueTypeError};