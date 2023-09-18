export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const beginNotNumsAndSymb = /^[^/d_-]/.test(this.name);
    const endNotNumsAndSymb = /[^/d_-]$/.test(this.name);
    const threeNumsNotLine = /^(?!.*\d{4})/.test(this.name);
    const curWordNumsSymb = /^[a-z0-9_-]+$/i.test(this.name);
    return (beginNotNumsAndSymb && endNotNumsAndSymb && threeNumsNotLine && curWordNumsSymb);
  }
}
