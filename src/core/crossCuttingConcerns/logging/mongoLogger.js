import CustomConsole from '../../extensions/consoleExtensions.js';
import BaseLogger from './logger.js';
export default class MongoLogger extends BaseLogger {
  log(data) {
      CustomConsole.logInfo('Logged to Mongo', data);
  }
}