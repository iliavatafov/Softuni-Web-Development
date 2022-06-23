const { expect } = require('chai');
const library = require('./library');

describe("Tests of library funtionality", function() {

    describe("Tests funtionality of calcPriceOfBook", function() {
        it("throws the correct error when invalid input", function() {
            expect(() => library.calcPriceOfBook(3, 2000)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(null, 2000)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(undefined, 2000)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(`Harry Potter and the chamber of secrets`, null)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(`Harry Potter and the chamber of secrets`, undefined)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(`Harry Potter and the chamber of secrets`, `2002`)).to.throw(`Invalid input`);
            expect(() => library.calcPriceOfBook(`Harry Potter and the chamber of secrets`, 2002.2)).to.throw(`Invalid input`);
        });

        it("Returns the right msg when year of the book is after 1980", function() {
            expect(library.calcPriceOfBook('Harry Potter', 1997)).to.equal('Price of Harry Potter is 20.00');
        });
        it("Returns the right msg when year of the book is before 1980", function() {
            expect(library.calcPriceOfBook('Pod Igoto', 1894)).to.equal('Price of Pod Igoto is 10.00');
            expect(library.calcPriceOfBook('Harry Potter', 1980)).to.equal('Price of Harry Potter is 10.00');
        });
    });

    describe("Tests funtionality of findBook", function() {
        it("Throw correct error msg when array is empty", function() {
            expect(() => library.findBook([], 'Harry Potter')).to.throw('No books currently available');
        });
        it("Returns the right msg when the book is in the library", function() {
            expect(library.findBook(['Harry Potter'], 'Harry Potter')).to.equal('We found the book you want.');
        });
        it("Returns the right msg when the book isn`t in the library", function() {
            expect(library.findBook(['Elon Musk'], 'Harry Potter')).to.equal('The book you are looking for is not here!');
        });
    });

    describe("Tests funtionality of arrangeTheBooks", function() {
        it("Throw correct error msg when parameter is not a number or negative", function() {
            expect(() => library.arrangeTheBooks(5.5)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('5')).to.throw('Invalid input');
        });
        it("Return right msg when enough space", function() {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it("Return right msg when not enough space", function() {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});