const { expect } = require(`chai`);
const mathEnforcer = require(`./04. Math Enforcer`);

describe(`test functionalities of mathEnforcer`, () => {

    describe(`add five function`, () => {

        it(`return undefined when input param is NaN`, () => {
            expect(mathEnforcer.addFive(`adasf`)).to.equal(undefined);
            expect(mathEnforcer.addFive([1])).to.equal(undefined);
            expect(mathEnforcer.addFive({ number: 1 })).to.equal(undefined);
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
        });

        it(`returns number + 5 when input is a number`, () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(-5)).to.equal(0);
            expect(mathEnforcer.addFive(10)).to.equal(15);
            expect(mathEnforcer.addFive(9)).to.equal(14);
            expect(mathEnforcer.addFive(5.5)).to.equal(10.5);
            expect(mathEnforcer.addFive(10)).closeTo(14.99453, 0.5);
        });
    });

    describe(`subtract ten function`, () => {

        it(`return undefined when input param is NaN`, () => {
            expect(mathEnforcer.subtractTen(`adasf`)).to.equal(undefined);
            expect(mathEnforcer.subtractTen([1])).to.equal(undefined);
            expect(mathEnforcer.subtractTen({ number: 1 })).to.equal(undefined);
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
        });

        it(`returns number - 10 when input is a number`, () => {
            expect(mathEnforcer.subtractTen(50)).to.equal(40);
            expect(mathEnforcer.subtractTen(30)).to.equal(20);
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(-10.55)).to.equal(-20.55);
            expect(mathEnforcer.subtractTen(11)).closeTo(0.99546, 0.01);
        });
    });

    describe(`sum function`, () => {

        it(`return undefined when first param is NaN`, () => {
            expect(mathEnforcer.sum(`adasf`, 1)).to.equal(undefined);
            expect(mathEnforcer.sum([1], 4)).to.equal(undefined);
            expect(mathEnforcer.sum({ number: 1 }, 6)).to.equal(undefined);
            expect(mathEnforcer.sum(undefined, 7)).to.equal(undefined);
            expect(mathEnforcer.sum(null, 1)).to.equal(undefined);
        });

        it(`return undefined when second param is NaN`, () => {
            expect(mathEnforcer.sum(1, `adasf`)).to.equal(undefined);
            expect(mathEnforcer.sum(4, [1])).to.equal(undefined);
            expect(mathEnforcer.sum(7, { number: 1 })).to.equal(undefined);
            expect(mathEnforcer.sum(77, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(222, null)).to.equal(undefined);
        });

        it(`returns sum of two params`, () => {
            expect(mathEnforcer.sum(2, 3)).to.equal(5);
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
            expect(mathEnforcer.sum(1500, 500)).to.equal(2000);
            expect(mathEnforcer.sum(2.565, 0.435)).closeTo(3, 0.01);
        });
    });
});