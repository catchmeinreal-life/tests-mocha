import { expect } from "chai";
import { multiply  } from "../utils.js";

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
});