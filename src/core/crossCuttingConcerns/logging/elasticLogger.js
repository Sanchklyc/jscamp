import { BaseLogger } from "./logger";


export class ElasticLogger extends BaseLogger {
    log(data) {
        console.log("Logged to Elastic" + data);
    }
}
