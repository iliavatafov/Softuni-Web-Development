const testNumbers = require(`./testNumbers`);
const { expect } = require(`chai`);

describe(`Test Numbers`, () => {

    describe(`sumNumbers`, () => {
        it(`check if parameters are numbers`, () => {
            expect(testNumbers.sumNumbers(5, 3)).to.equal(`8.00`);
        });

        it(`check with one negative parmeter`, () => {
            expect(testNumbers.sumNumbers(5, -3)).to.equal(`2.00`);
            expect(testNumbers.sumNumbers(-5, 3)).to.equal(`-2.00`);
            expect(testNumbers.sumNumbers(-5, -3)).to.equal(`-8.00`);
        });

        it(`return undefined when parameters are not numbers`, () => {
            expect(testNumbers.sumNumbers(`5`, -3)).to.equal(undefined);
            expect(testNumbers.sumNumbers(`5`, `-3`)).to.equal(undefined);
        });

        it(`return sum rounded to second decimal when numbers with floating point`, () => {
            expect(testNumbers.sumNumbers(5.555, 3.333)).to.equal(`8.89`);
        })
    });

    describe(`numberChecker`, () => {
        it(`check returned text if input is odd number`, () => {
            expect(testNumbers.numberChecker(1)).contain(`odd`)
        });

        it(`check returned text if input is even number`, () => {
            expect(testNumbers.numberChecker(2)).contain(`even`)
        });

        it(`throw erorr when invalid parameter`, () => {
            expect(() => testNumbers.numberChecker(`a`)).to.throw();
        });
    });

    describe(`averageSumArray`, () => {
        it(`return average correct average sum with integers`, () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });

        it(`return average correct average sum with decimals`, () => {
            expect(testNumbers.averageSumArray([1.44, 2.66, 3.55])).to.equal(2.55);
        });
    });
});