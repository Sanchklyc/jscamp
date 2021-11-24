import BaseResult from "./baseResult.js";


export default class ErrorResult extends BaseResult {
    constructor(message) {
        super(false, message);
    }
}
