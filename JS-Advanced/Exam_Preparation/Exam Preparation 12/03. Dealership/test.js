const { expect } = require('chai');
const dealership = require('./dealership');

describe("Tests dealership functionalities", function() {

    describe("newCarCost function tests", function() {

        it("when old car is not included in the list of cars with discounts the function returns price of the new car", function() {
            expect(dealership.newCarCost('Mercedes CLK', 50000)).to.equal(50000);
        });
        it("when old car in the list of cars with discounts the function returns discounted price", function() {
            expect(dealership.newCarCost('Audi A4 B8', 50000)).to.equal(35000);
            expect(dealership.newCarCost('Audi A8 D5', 100000)).to.equal(75000);
            expect(dealership.newCarCost('Audi TT 8J', 15000)).to.equal(1000);
        });
    });

    describe("carEquipment function tests", function() {

        it("the function returns array with selected extras", function() {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [1, 2])).to.deep.equal(['sliding roof', 'sport rims']);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 2])).to.deep.equal(['heated seats', 'sport rims']);
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [3])).to.deep.equal(['navigation']);
        });
    });

    describe("euroCategory function tests", function() {

        it("when eco category is less then 4 return msg there is no discount", function() {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
            expect(dealership.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
        it("when eco category is more or equal to 4 return msg there is discount", function() {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
            expect(dealership.euroCategory(6)).to.equal('We have added 5% discount to the final price: 14250.');
        });
    });



});