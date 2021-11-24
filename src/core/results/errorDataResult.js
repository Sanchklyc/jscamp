import BaseDataResult from "./BaseDataResult.js";

export default class ErrorDataResult extends BaseDataResult {
    constructor(data, message) {
        super(data, false, message);
    }
}
