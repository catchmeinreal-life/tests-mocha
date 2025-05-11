import { expect } from "chai";
import { multiply, add  } from "../utils.js";

describe('Utility functions', function(){
    describe('multiply function', function (){
        it('should return 6 when multiplying 2 and 3', function(){
            expect(multiply(2,3)).to.equal(6);
        });

        it('should return 0 when multiplying by 0', function () {
            expect(multiply(5, 0)).to.equal(0);
            expect(multiply(0,5)).to.equal(0);
        });

        it('should handle negative numbers correctly', function () {
            expect(multiply(-2 , 3)).to.equal(-6);
            expect(multiply(2, -3)).to.equal(-6);
            expect(multiply(-2, -3)).to.equal(6);
        });
    });

    // test 2
    describe('add function', function (){
        it('Should return 7 when adding 3 and 4', function (){
            expect(add(3,4)).to.equal(7);
            expect(add(4,3)).to.equal(7);
        });
    });
});