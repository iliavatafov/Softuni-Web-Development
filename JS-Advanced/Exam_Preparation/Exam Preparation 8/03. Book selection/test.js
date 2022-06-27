const bookSelection = require('./bookSelection')
const { expect } = require('chai');

describe("Tests bookSection functionality", function() {

    describe("Test isGenreSuitable work as expected", function() {

        it("if the genre is Thriller or Horror return the right message", function() {
            expect(bookSelection.isGenreSuitable('Horror', 12)).to.equal('Books with Horror genre are not suitable for kids at 12 age');
            expect(bookSelection.isGenreSuitable('Thriller', 1)).to.equal('Books with Thriller genre are not suitable for kids at 1 age');
        });
        it("if the genre is Thriller or Horror return the right message", function() {
            expect(bookSelection.isGenreSuitable('Horror', 13)).to.equal('Those books are suitable');
            expect(bookSelection.isGenreSuitable('Thriller', 22)).to.equal('Those books are suitable');
        });
    });

    describe("Test isItAffordable work as expected", function() {

        it("is the input valud", function() {
            expect(() => bookSelection.isItAffordable('20', 10)).to.throw('Invalid input');
            expect(() => bookSelection.isItAffordable(10, [10])).to.throw('Invalid input');
        });
        it("return correct result when money is less then the buget", function() {
            expect(bookSelection.isItAffordable(5, 4)).to.equal('You don\'t have enough money');
            expect(bookSelection.isItAffordable(20, 19)).to.equal('You don\'t have enough money');
        });
        it("return correct result when money is more or equal to the buget", function() {
            expect(bookSelection.isItAffordable(5, 5)).to.equal('Book bought. You have 0$ left');
            expect(bookSelection.isItAffordable(10, 11)).to.equal('Book bought. You have 1$ left');
        });
    });

    describe("Test suitableTitles  work as expected", function() {

        it("Is the input valid", function() {
            expect(() => bookSelection.suitableTitles({}, 'Somthing')).to.throw('Invalid input');
            expect(() => bookSelection.suitableTitles([{}], 1)).to.throw('Invalid input');
        });

        it("return correct output", function() {

            const expectedResult = ['Steve Jobs', 'Elon Musk', 'Nikola Tesla'];

            const actualResult = bookSelection.suitableTitles([
                { title: 'The Da Vinci Code', genre: 'Thriller' },
                { title: 'Steve Jobs', genre: 'Biography' },
                { title: 'Elon Musk', genre: 'Biography' },
                { title: 'Nikola Tesla', genre: 'Biography' },
            ], 'Biography');

            expect(actualResult).to.deep.equal(expectedResult);
        });

    });
});