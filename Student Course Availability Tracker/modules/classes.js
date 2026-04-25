export class Item {
  constructor(name) {
    this.name = name;
  }
}

export class Course extends Item {
  constructor(name, code, department, capacity, enrolled) {
    super(name);
    this.id = Date.now() + Math.random();
    this.code = code;
    this.department = department;
    this.capacity = Number(capacity);
    this.enrolled = Number(enrolled);
  }

  getAvailableSeats() {
    return this.capacity - this.enrolled;
  }

  isFull() {
    return this.enrolled >= this.capacity;
  }
}