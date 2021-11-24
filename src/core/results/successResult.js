import BaseResult from "./baseResult.js";


export default class SuccessResult extends BaseResult {
    constructor(message) {
        super(true, message);
    }
}
