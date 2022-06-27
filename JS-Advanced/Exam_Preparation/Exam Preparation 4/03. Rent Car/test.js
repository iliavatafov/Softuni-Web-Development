const { expect } = require(`chai`);
const rentCar = require(`./rentCar`);

describe("rentCar", function() {
    describe("searchCar", function() {
        it("return correct number of the models in array and correct message", function() {
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi"], `BMW`)).to.equal(`There is 1 car of model BMW in the catalog!`);
            expect(rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], `BMW`)).to.equal(`There is 2 car of model BMW in the catalog!`);
        });

        it("throws correct error when invalid input", function() {
            expect(() => rentCar.searchCar(2, `BMW`)).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar({}, `BMW`)).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(null, `BMW`)).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(undefined, `BMW`)).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], 2)).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], {})).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], [])).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], undefined)).to.throw(`Invalid input!`);
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], null)).to.throw(`Invalid input!`);
        });

        it("throw correct error when car not much", function() {
            expect(() => rentCar.searchCar(["Volkswagen", "BMW", "Audi", "BMW"], `Lada`)).to.throw('There are no such models in the catalog!');
        });
    });

    describe("calculatePriceOfCar", function() {
        it("throw correct error message when invalid input", function() {
            expect(() => rentCar.calculatePriceOfCar(1, 1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar({}, 1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar([], 1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(undefined, 1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(null, 1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(`BMW`, ``)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(`BMW`, 1.1)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(`BMW`, undefined)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(`BMW`, null)).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(`BMW`, [])).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar(`BMW`, {})).to.throw('Invalid input!');
        });

        it("it return correct message and price when the input is correct and model is available", function() {
            expect(rentCar.calculatePriceOfCar(`BMW`, 1)).to.equal(`You choose BMW and it will cost $45!`);
            expect(rentCar.calculatePriceOfCar(`BMW`, 10)).to.equal(`You choose BMW and it will cost $450!`);
            expect(rentCar.calculatePriceOfCar(`Volkswagen`, 1)).to.equal(`You choose Volkswagen and it will cost $20!`);
            expect(rentCar.calculatePriceOfCar(`Audi`, 1)).to.equal(`You choose Audi and it will cost $36!`);
            expect(rentCar.calculatePriceOfCar(`Toyota`, 1)).to.equal(`You choose Toyota and it will cost $40!`);
            expect(rentCar.calculatePriceOfCar(`Mercedes`, 1)).to.equal(`You choose Mercedes and it will cost $50!`);
        });

        it("it throw correct error when car is not available in the list", function() {
            expect(() => rentCar.calculatePriceOfCar(`Lada`, 1)).to.throw('No such model in the catalog!');
        });
    });

    describe("checkBudget", function() {
        it("throw invalid input when parameters are not numbers", function() {
            expect(() => rentCar.checkBudget(`20`, `3`, `10`)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(`20`, 10, 10)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(20, `3`, 10)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(10, 3, `3`)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(10.1, 3.1, 3.2)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(10, 3.1, 3)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(10.1, 3, 3)).to.throw(`Invalid input!`);
            expect(() => rentCar.checkBudget(10, 1, 3.2)).to.throw(`Invalid input!`);
        });

        it("return correct message when buget is enough", function() {
            expect(rentCar.checkBudget(20, 2, 40)).to.equal(`You rent a car!`);
            expect(rentCar.checkBudget(21, 3, 63)).to.equal(`You rent a car!`);
        });

        it("return correct message when buget is less then cost", function() {
            expect(rentCar.checkBudget(20, 2, 39)).to.equal(`You need a bigger budget!`);
            expect(rentCar.checkBudget(10, 2, 10)).to.equal(`You need a bigger budget!`);
        });
    });
});