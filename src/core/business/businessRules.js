export default class BusinessRules {
  static Run(...params) {
    for (let i = 0; i < params.length; i++) {
      if (params[i].success == false) return params[i];
    }
    return null;
  }
}
