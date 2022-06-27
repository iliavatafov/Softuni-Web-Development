const { expect } = require('chai');
const carService = require('./03. Car service_Resources')

describe("Tests carService", function() {

    describe("isItExpensive", function() {

        it("if input is Engine or Transmission return correct msg", function() {
            expect(carService.isItExpensive('Engine')).to.equal('The issue with the car is more severe and it will cost more money');
            expect(carService.isItExpensive('Transmission')).to.equal('The issue with the car is more severe and it will cost more money');
        });
        it("if input is Engine or Transmission return correct msg", function() {
            expect(carService.isItExpensive('Door')).to.equal('The overall price will be a bit cheaper');
            expect(carService.isItExpensive('Window')).to.equal('The overall price will be a bit cheaper');
        });
    });

    describe("discount", function() {

        it("when numberOfParts is less the two return You cannot apply a discount", function() {
            expect(carService.discount(2, 1000)).to.equal('You cannot apply a discount');
            expect(carService.discount(1, 200)).to.equal('You cannot apply a discount');
        });
        it("if numberOfParts is higher then two or equal to seven return correct msg", function() {
            expect(carService.discount(3, 1000)).to.equal('Discount applied! You saved 150$');
        });
        it("if numberOfParts is higher then seven return correct msg", function() {
            expect(carService.discount(8, 1000)).to.equal('Discount applied! You saved 300$');
        });
        it("if invalid input throw error", function() {
            expect(() => carService.discount('8', 1000)).to.throw('Invalid input');
            expect(() => carService.discount(8, [100])).to.throw('Invalid input');
            expect(() => carService.discount({ 8: 8 }, 1000)).to.throw('Invalid input');
        });
    });

    describe("partsToBuy", function() {

        it("return  0 when partsCatalog is empty", function() {
            expect(carService.partsToBuy([], ["blowoff valve", "injectors"])).to.equal(0);
        });
        it("return  0 when partsCatalog is empty", function() {
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 100 }, { part: "coil springs", price: 230 }], ["blowoff valve", "injectors"])).to.equal(245);
            expect(carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 100 }, { part: "coil springs", price: 230 }], ["coil springs", "injectors"])).to.equal(330);
        });
        it("throw error when invalid input", function() {
            expect(() => carService.partsToBuy({ part: "blowoff valve", price: 145 }, ["blowoff valve", "injectors"])).to.throw('Invalid input');
            expect(() => carService.partsToBuy([{ part: "blowoff valve", price: 145 }, { part: "injectors", price: 100 }, { part: "coil springs", price: 230 }], 'injectors')).to.throw('Invalid input');
        });
    });
});