import { DSError } from "./DSError.js";
import {EmptyStructureError} from "./EmptyStructureError.js"
import { InvalidOperatorError } from "./InvalidOperatorError.js";
import {InvalidIndexError} from "./InvalidIndexError.js"
import { ValueNotFoundError } from "./ValueNotFoundError.js";
import { ValueTypeError } from "./ValueTypeError.js";
 const AppErrors={
    DSError,
    EmptyStructureError,
    InvalidIndexError,
    InvalidOperatorError,
    ValueNotFoundError,
    ValueTypeError
 }

 export {AppErrors};