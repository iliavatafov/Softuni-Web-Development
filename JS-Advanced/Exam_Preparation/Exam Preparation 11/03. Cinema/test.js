const { expect } = require('chai');
const cinema = require('./cinema');

describe("Tests cinema functionalitie", function() {

    describe("Test functionality of	showMovies", function() {

        it("if input is empty array, method returns correct msg", function() {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        });
        it("if input is ok, method returns correct msg", function() {
            expect(cinema.showMovies(['Avengers', 'Harry Potter'])).to.equal('Avengers, Harry Potter');
            expect(cinema.showMovies(['Avengers', 'Harry Potter', 'Gladiator'])).to.equal('Avengers, Harry Potter, Gladiator');
        });
    });

    describe("Test functionality of ticketPrice", function() {

        it("return correct price for Premiere", function() {
            expect(cinema.ticketPrice('Premiere')).to.equal(12.00);
        });
        it("return correct price for Normal", function() {
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
        });
        it("return correct price for Discount", function() {
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });
        it("when projection type is wrong return throw error", function() {
            expect(() => cinema.ticketPrice('Somthing')).to.throw('Invalid projection type.');
        });
    });

    describe("Test functionality of swapSeatsInHall", function() {

        it("when one of the numbers no exist returns right msg", function() {
            expect(cinema.swapSeatsInHall(21)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("when the numbers are not integers returns right msg", function() {
            expect(cinema.swapSeatsInHall(1.11, 20.22)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("if one of the numbers is greater then 20 returns right msg", function() {
            expect(cinema.swapSeatsInHall(2, 25)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("when seats are less or equal to 0 return right msg", function() {
            expect(cinema.swapSeatsInHall(-1, 18)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });
        it("when sucessfuly change the seats return correct msg", function() {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 10)).to.equal('Successful change of seats in the hall.');
        });
        it("when input is not valid reutrn right msg", function() {
            expect(cinema.swapSeatsInHall('a', -18)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, [0])).to.equal('Unsuccessful change of seats in the hall.');
        });
    });
});