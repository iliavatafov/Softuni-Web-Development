const { expect } = require(`chai`);
const isSymmetric = require(`./05. Check for Symmetry`);

describe(`Check symmetry`, () => {

    it(`return true if the input array is symmetric`, () => {
        let input = [1, 2, 2, 1];
        expect(isSymmetric(input)).to.equal(true);
    });

    it(`return false if the input array is non-symmetric`, () => {
        let input = [1, 2, 1, 1];
        expect(isSymmetric(input)).to.equal(false);
    });

    it(`return false when input is diffrent from array`, () => {
        expect(isSymmetric(1)).to.equal(false)
        expect(isSymmetric(`1`)).to.equal(false)
        expect(isSymmetric(NaN)).to.equal(false)
        expect(isSymmetric(undefined)).to.equal(false)
        expect(isSymmetric({ a: 1 })).to.equal(false)
    });

    it(`returns true for symmetric array with odd numbers of elements`, () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    })

    it(`returns true for symmetric array with different type`, () => {
        expect(isSymmetric([1, 2, `1`])).to.be.false;
    })

    it(`returns true for symetric array with strings`, () => {
        expect(isSymmetric([`c`, `b`, `c`])).to.be.true;
    })

    it(`returns false for non-symmetric array with strings`, () => {
        expect(isSymmetric([`c`, `b`, `a`, `a`])).to.be.false;
    });

    it(`returns false for symmetric string`, () => {
        expect(isSymmetric(`abba`)).to.be.false;
    });

});