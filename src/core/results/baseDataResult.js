import BaseResult from "./baseResult.js";


export default class BaseDataResult extends BaseResult {
    constructor(data, success, message) {
        super(success, message);
        this.data = data;
    }
}
