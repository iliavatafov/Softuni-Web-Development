const { expect } = require(`chai`);
const lookupChar = require(`./03. Char Lookup`);

describe(`find char at certain index`, () => {

    it(`return undefined when first parameter is not a string`, () => {
        expect(lookupChar(4, 3)).equal(undefined);
        expect(lookupChar([`fds`], 3)).equal(undefined);
        expect(lookupChar({ name: `Gosho` }, 3)).equal(undefined);
        expect(lookupChar(undefined, 3)).equal(undefined);
        expect(lookupChar(null, 3)).equal(undefined);
    });

    it(`return undefined when second parameter is not a number`, () => {
        expect(lookupChar(`fds`, { number: 1 })).equal(undefined);
        expect(lookupChar(`fds`, [1])).equal(undefined);
        expect(lookupChar({ name: `Gosho` }, `3`)).equal(undefined);
        expect(lookupChar(`fds`, undefined)).equal(undefined);
        expect(lookupChar(`fds`, null)).equal(undefined);
    });

    it(`return undefined when second parameter is decimal number`, () => {
        expect(lookupChar(`fds`, 1.1)).equal(undefined);
        expect(lookupChar(`fds`, 2.10)).equal(undefined);
    });

    it(`returns incorect index when index is out of range`, () => {
        expect(lookupChar(`fds`, 3)).equal(`Incorrect index`);
        expect(lookupChar(`fds`, -1)).equal(`Incorrect index`);
    });

    it(`returns the char on the specified index`, () => {
        expect(lookupChar(`fds`, 2)).equal(`s`);
        expect(lookupChar(`fds`, 0)).equal(`f`);
        expect(lookupChar(`fds`, 1)).equal(`d`);
    });

});