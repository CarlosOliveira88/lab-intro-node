class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length
  }

  add(item) {

    if (this.length === 0) {
      this.items.push(item);
    } else {
      let index = 0;
      while (index < this.length && this.items[index] <= item) {
        index += 1;
      }
      this.items.splice(index, 0, item);
    }
    this.length = this.items.length;
  }

  get(pos) {

    if (pos > this.length) {
      throw new Error('OutOfBounds');
    }
    return this.items[pos];

  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[this.length - 1];

  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    return this.items[0];
  }

  sum() {
    const suma = this.items.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    return suma;
  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    }
    const promedio = this.sum() / this.items.length;
    return promedio;
  }
}

module.exports = SortedList;
