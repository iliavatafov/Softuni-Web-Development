class Hex {
    constructor(value) {
        this.number = value;
    }

    valueOf() {
        return this.number;
    }

    toString() {
        return `0x${this.number.toString(16).toUpperCase()}`
    }

    plus(number) {
        number = isNaN(number) ? parseInt(number, 16) + this.number : number + this.number;
        return new Hex(number);
    }

    minus(number) {
        number = isNaN(number) ? this.number - parseInt(number, 16) : this.number - number;
        return new Hex(number);
    }

    parse(string) {
        return parseInt(string, 16);
    }

}


let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));