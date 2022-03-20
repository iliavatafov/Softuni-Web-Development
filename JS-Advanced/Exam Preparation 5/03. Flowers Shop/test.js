const { expect } = require(`chai`);
const flowerShop = require(`./flowerShop`);

describe("flowerShop", function() {
    describe("calcPriceOfFlowers", function() {
        it("return the correct price rounded to second decimal point", function() {
            expect(flowerShop.calcPriceOfFlowers(`rose`, 5, 5)).to.equal(`You need $25.00 to buy rose!`);
        });

        it("throw error when invalid input", function() {
            expect(() => flowerShop.calcPriceOfFlowers(`rose`, 5, `5`)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers(`rose`, `5`, 5)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers([`rose`], 5, 5)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers({ rose: `rose` }, 5, 5)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers(undefined, 5, 5)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers(null, 5, 5)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers(null, 5.2, 5)).to.throw(`Invalid input!`);
            expect(() => flowerShop.calcPriceOfFlowers(null, 5, 5.1)).to.throw(`Invalid input!`);
        });
    });

    describe("checkFlowersAvailable", function() {
        it("if flower presented in the array return correct text", function() {
            expect(flowerShop.checkFlowersAvailable(`Rose`, ["Rose", "Lily", "Orchid"])).to.equal(`The Rose are available!`);
            expect(flowerShop.checkFlowersAvailable(`Lily`, ["Rose", "Lily", "Orchid"])).to.equal(`The Lily are available!`);
        });

        it("if flower is not presented in the array thrwo correct error message", function() {
            expect(flowerShop.checkFlowersAvailable(`Snowdrop`, ["Rose", "Lily", "Orchid"])).to.equal(`The Snowdrop are sold! You need to purchase more!`);
            expect(flowerShop.checkFlowersAvailable(`Rose`, ["Lily", "Orchid"])).to.equal(`The Rose are sold! You need to purchase more!`);
        });
    });

    describe("sellFlowers", function() {
        it("return correct outpput when correct input", function() {
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2)).to.equal(["Rose", "Lily"].join(` / `));
            expect(flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 0)).to.equal(["Lily", "Orchid"].join(` / `));
        });

        it("thrw an error with correct message when invalid input", function() {
            expect(() => flowerShop.sellFlowers({ Rose: `Rose` }, 2)).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(null, 2)).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(undefined, 2)).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers([], 2)).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], `2`)).to.throw(`Invalid input!`);
            expect(() => flowerShop.sellFlowers(["Rose", "Lily", "Orchid"], 2.6)).to.throw(`Invalid input!`);
        });
    });
});