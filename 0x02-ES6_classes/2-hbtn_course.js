export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this._name;
  }

  set name(val) {
    if (typeof val !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = val;
  }

  get length() {
    return this._length;
  }

  set length(val) {
    if (typeof val !== 'number') {
      throw new TypeError('Lenght must be a number');
    }
    this._length = val;
  }

  get students() {
    return this._students;
  }

  set students(val) {
    if (!this.isStringArray(val)) {
      throw new TypeError('Students must be an array of string');
    }
    this._students = val;
  }

  /* eslint-disable class-methods-use-this */
  isStringArray(arr) {
    if (Array.isArray(arr)) {
      return arr.every((i) => typeof i === 'string');
    }
    return false;
  }
}
