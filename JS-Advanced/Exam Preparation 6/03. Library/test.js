const library = require(`./library`);
const { expect } = require(`chai`);


describe("library", function() {

    describe("calcPriceOfBook", function() {
        it("return correct message and price when input is valid", function() {
            expect(library.calcPriceOfBook(`The word of the rings`, 1954)).to.equal(`Price of The word of the rings is 10.00`);
            expect(library.calcPriceOfBook(`Harry Potter and the chamber of secrets`, 2002)).to.equal(`Price of Harry Potter and the chamber of secrets is 20.00`);
            expect(library.calcPriceOfBook(`Some book`, 1980)).to.equal(`Price of Some book is 10.00`);
        });

        it("throws the correct error when invalid input", function() {
            expect(() => library.calcPriceOfBook(3, 2000)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(null, 2000)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(undefined, 2000)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(`Harry Potter and the chamber of secrets`, null)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(`Harry Potter and the chamber of secrets`, undefined)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(`Harry Potter and the chamber of secrets`, `2002`)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(`Harry Potter and the chamber of secrets`, 2002.2)).to.throw(`Invalid input`);
        });
    });

    describe("findBook", function() {
        it("thrwo correct error message when input array length is equal to zero", function() {
            expect(() => library.findBook([], `Troy`)).to.throw(`No books currently available`);
        });

        it("return correct message when the book is available", function() {
            expect(library.findBook([`Troy`, `Harry Potter`], `Troy`)).to.equal(`We found the book you want.`);
        });

        it("return correct message when the book is not available", function() {
            expect(library.findBook([`Troy`, `Harry Potter`], `The Word Of The Rings`)).to.equal(`The book you are looking for is not here!`);
        });
    });

    describe("arrangeTheBooks", function() {
        it("when input is decimal number or negative number thrwo correct error", function() {
            expect(() => library.arrangeTheBooks(5.5)).to.throw(`Invalid input`);
            expect(() => library.arrangeTheBooks(-5)).to.throw(`Invalid input`);
            expect(() => library.arrangeTheBooks(`5`)).to.throw(`Invalid input`);
        });

        it("return correct message when there is enough space to arrange the books", function() {
            expect(library.arrangeTheBooks(40)).to.equal(`Great job, the books are arranged.`);
        });

        it("return correct message when there is not enough space to arrange the books", function() {
            expect(library.arrangeTheBooks(41)).to.equal(`Insufficient space, more shelves need to be purchased.`);
        });
    });
});