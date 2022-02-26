const { expect } = require(`chai`);
const rgbToHexColor = require(`./06. RGB to Hex`);

describe(`RGB convertor`, () => {

    it(`converts white`, () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal(`#FFFFFF`)
    });

    it(`converts black`, () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal(`#000000`);
    });

    it(`converts darkblue`, () => {
        expect(rgbToHexColor(35, 68, 101)).to.equal(`#234465`);
    });

    it(`return undefined for missing parameters`, () => {
        expect(rgbToHexColor(35)).to.be.undefined;
    });

    it(`for values out of range negative values`, () => {
        expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
    });

    it(`for values out of range positive values`, () => {
        expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });

    it(`invalid parameter type`, () => {
        expect(rgbToHexColor(`0`, `0`, `0`)).to.be.undefined;
        expect(rgbToHexColor(`0`, 0, 0)).to.be.undefined;
        expect(rgbToHexColor(0, `0`, 0)).to.be.undefined;
        expect(rgbToHexColor(0, 0, `0`)).to.be.undefined;
    });

});