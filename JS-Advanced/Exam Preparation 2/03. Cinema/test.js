const { expect } = require(`chai`);

const cinema = require(`./cinema`);

describe("cinema", function() {

    describe("showMovies", function() {

        it("the function returns correct text if array with zero element", function() {
            expect(cinema.showMovies([])).to.equal(`There are currently no movies to show.`);
        });

        it("the function return correct answer whe parameters are valid", function() {
            expect(cinema.showMovies([`The Joker`, `Batman`, `Avatar`, `Pirates of the Carribean`]))
                .to.equal([`The Joker`, `Batman`, `Avatar`, `Pirates of the Carribean`].join(`, `));
        });

    });

    describe("ticketPrice", function() {

        it("when the movie is in schadule return price according to the film type", function() {
            expect(cinema.ticketPrice(`Premiere`)).to.equal(12.00);
            expect(cinema.ticketPrice(`Normal`)).to.equal(7.50);
            expect(cinema.ticketPrice(`Discount`)).to.equal(5.50);
        });

        it("when the movie is not in the scheduale throw error", function() {
            expect(() => cinema.ticketPrice(`Banana`)).to.throw(`Invalid projection type.`);
        });
    });


    describe("swapSeatsInHall", function() {

        it("return the correct result when place exchange is not submitted", function() {
            expect(cinema.swapSeatsInHall(`a`, 2.55)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(1)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(1.55, 2.55)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(-1, 19)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(1, 21)).to.equal(`Unsuccessful change of seats in the hall.`);
            expect(cinema.swapSeatsInHall(0, 5)).to.equal(`Unsuccessful change of seats in the hall.`);
        });

        it("return the correct result when place exchange is submitted", function() {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal(`Successful change of seats in the hall.`);
        });

    });

});