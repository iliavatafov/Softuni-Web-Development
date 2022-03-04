class Stringer {

    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(number) {
        this.innerLength += number;
    }

    decrease(number) {
        let resultLength = this.innerLength - number;
        this.innerLength = resultLength < 0 ?
            0 : resultLength;
    }

    toString() {
        if (this.innerLength === 0) return `...`

        if (this.innerLength < this.innerString.length) {
            return this.innerString.substring(0, this.innerLength) + `...`;
        } else {
            return this.innerString;
        }
    }
}