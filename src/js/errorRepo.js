export default class ErrorRepository {
  constructor(code, discription) {
    this.code = code;
    this.discription = discription;
    this.err = new Map();
    this.err.set(code, discription);
  }

  translate(code) {
    const gettingValue = this.err.get(code);
    if (gettingValue) {
      return gettingValue;
    }
    return 'Unknown error';
  }
}
