const { expect } = require(`chai`);
const { beforeEach } = require("mocha");
const { createCalculator } = require(`./07. Add or Subtract`);

describe(`Summator`, () => {

    let instance = null;

    beforeEach(() => {
        instance = createCalculator();
    });

    it(`expect instance to have on property`, () => {
        expect(instance).to.has.ownProperty(`add`);
        expect(instance).to.has.ownProperty(`subtract`);
        expect(instance).to.has.ownProperty(`get`);
    });

    it(`starts empty`, () => {
        expect(instance.get()).to.equal(0);
    });

    it(`add single number`, () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it(`add multiple numbers`, () => {
        instance.add(1);
        instance.add(2);
        expect(instance.get()).to.equal(3);
    });

    it(`subtract with single num`, () => {
        instance.subtract(1);
        expect(instance.get()).to.equal(-1);
    });

    it(`multiple numbers`, () => {
        instance.subtract(1);
        instance.subtract(2);
        expect(instance.get()).to.equal(-3);
    });

    it(`add and subtract`, () => {
        instance.add(3);
        instance.subtract(2);
        expect(instance.get()).to.equal(1);
    });

    it(`add single number`, () => {
        instance.add(1);
        expect(instance.get()).to.equal(1);
    });

    it(`working with numbers as strings`, () => {
        instance.add(`1`);
        instance.add(`2`);
        instance.subtract(`4`);
        expect(instance.get()).to.equal(-1);
    });
});