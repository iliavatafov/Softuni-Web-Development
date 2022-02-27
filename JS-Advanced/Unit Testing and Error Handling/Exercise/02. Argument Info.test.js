const { expect } = require(`chai`);
const isOddOrEven = require(`./02. Argument Info`);

describe(`Return even or odd`, () => {

    it(`return undefined when input is different from string`, () => {
        expect(isOddOrEven(3)).to.equal(undefined);
        expect(isOddOrEven({ number: `5` })).to.equal(undefined);
    });

    it(`return even when lenght of the string parameter is even`, () => {
        expect(isOddOrEven(`popy`)).to.equal(`even`);
    });

    it(`return odd when lenght of the string parameter is odd`, () => {
        expect(isOddOrEven(`raven`)).to.equal(`odd`);
    });

    it(`test different cases`, () => {
        expect(isOddOrEven(``)).to.equal(`even`);
        expect(isOddOrEven(`asdfghjk`)).to.equal(`even`);
        expect(isOddOrEven(`asdfghj`)).to.equal(`odd`);
        expect(isOddOrEven(`a`)).to.equal(`odd`);
    });

});