import { DSError } from "./DSError.js";
import {EmptyStructureError} from "./EmptyStructureError.js"
import { InvalidOperatorError } from "./InvalidOperatorError.js";
import {InvalidIndexErro} from "./InvalidIndexError.js"
import { ValueNotFoundError } from "./ValueNotFoundError.js";

 const AppErrors={
    DSError,
    EmptyStructureError,
    InvalidIndexErro,
    InvalidOperatorError,
    ValueNotFoundError
 }

 export {AppErrors};