const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
];

function factory(library, orders) {

    let result = [];

    for (let element of orders) {
        let valuesOfElement = Object.values(element);
        let newObject = valuesOfElement[0];

        for (let i = 0; i < valuesOfElement[1].length; i++) {
            newObject[valuesOfElement[1][i]] = library[valuesOfElement[1][i]];
        }
        result.push(newObject);
    }
    return result;
}

const products = factory(library, orders);
console.log(products);
