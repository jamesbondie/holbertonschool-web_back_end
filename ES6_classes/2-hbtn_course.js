export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError("Name must be a string");
    }
    this._name = name;
    if (typeof length !== 'number') {
      throw new TypeError("Length must be a number");
    }
    this._length = length;
    if (!(students instanceof Array)) {
      throw new TypeError("Students must be an array");
    }
    for (var i = 0; i < students.length; i++) {
      if (typeof students[i] !== 'string') {
        throw new TypeError("Students must be an array of strings");
      }
    }
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(name) {
    if (typeof name !== 'string')
    {
      throw new TypeError("Name must be a string");
    }
    return self._name = name;
  }

  set length(length) {
    if (typeof length !== 'number')
    {
      throw new TypeError("Length must be a number");
    }
    return this._length = length;
  }

  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError("Students must be an array of strings")
    }
    
    for (var i = 0; i < students.length; i++)
    {
      if (typeof students[i] !== 'string') {
        throw new TypeError("Students must be an array of strings")
      }
    }

    return self._students = students;
  }


}

