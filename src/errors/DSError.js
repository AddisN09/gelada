class DSError extends Error{
    constructor(message){
        this.message=message;
        this.name=this.constructor.name;
        if(Error.captureStackTrace){
            Error.captureStackTrace(this,this.constructor);
        }
    }
}
export {DSError};