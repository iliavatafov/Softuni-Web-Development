const { expect } = require(`chai`)
const calculator = require(`./04. Sum of Numbers`);

describe(`Sum of Numbers`, () => {

    it(`the returned sum is correct when two elements`, () => {
        expect(calculator([1, 1])).equal(2);
    });

    it(`the returned sum is correct when one element`, () => {
        expect(calculator([1])).equal(1);
    });

    it(`return NaN when one of elements in array is diff from Number`, () => {
        expect(isNaN(calculator([1, `a`]))).to.equal(true);
    });

});