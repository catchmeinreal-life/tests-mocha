export default class Counter {
    constructor(initialValue = 0) {
        this.count = initialValue;
    }

    increment() { return ++this.count; }
    decrement() { return --this.count; }
    getValue() { return this.count}
}