import BaseDataResult from "./BaseDataResult.js";

export default class SuccessDataResult extends BaseDataResult {
    constructor(data, message) {
        super(data, true, message);
    }
}
