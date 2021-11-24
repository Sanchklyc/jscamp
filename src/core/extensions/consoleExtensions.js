export default class CustomConsole {
  static logSuccess(input, data) {
    console.log(`%c ${input}`, "background: #222; color: #00FF00", data);
  }
  static logInfo(input, data) {
    if (data) console.log(`%c ${input}`, "background: #222; color: #FFFF00", data);
    else console.log(`%c ${input}`, "background: #222; color: #FFFF00");
  }

  static logDanger(input, data) {
    console.log(`%c ${input}`, "background: #222; color: #FF0000", data);
  }

  static logCustom(input, style, data) {
    console.log(`%c ${input}`, style, data);
  }
}
