import { expect } from "chai";
import Counter from "../counter.js";

describe('Counter Class', function () {
    let counter;

    this.beforeEach(function () {
        counter = new Counter();  // fresh instance for each test
    });

    it('Should start at 0', function () {
        expect(counter.getValue()).to.equal(0);
    });

    it('should increment correctly', function() {
        counter.increment();
        expect(counter.getValue()).to.equal(1);
    });

    it('Should decrement correctly', function () {
        counter.decrement();
        expect(counter.getValue()).to.equal(-1);
    });
})