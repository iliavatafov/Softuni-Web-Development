class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
        this._products = [];
    }

    loadingVegetables(vegetables) {

        let addedProducts = [];

        for (let element of vegetables) {

            let [type, quantity, price] = element.split(` `);

            price = Number(price);
            quantity = Number(quantity);

            if (this._products.includes(type)) {

                this.availableProducts.forEach(p => {

                    let product = Object.values(p)[0];

                    if (product == type) {

                        addedProducts.push(type);

                        p.quantity += quantity;

                        if (p.price < price) {
                            p.price = price;
                        }
                    }
                });
            } else {
                addedProducts.push(type);
                this.availableProducts.push({ type, quantity, price });
                this._products.push(type);
            }
        }

        let uniq = [...new Set(addedProducts)].join(`, `);

        return `Successfully added ${uniq}`;

    }


    buyingVegetables(selectedProducts) {

        let totalPrice = 0;

        for (let element of selectedProducts) {

            let [type, quantity] = element.split(` `);

            if (!this._products.includes(type)) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                this.availableProducts.forEach(p => {

                    let product = Object.values(p)[0];
                    let currentQuantity = Object.values(p)[1];
                    let price = Object.values(p)[2];

                    if (product == type) {

                        if (currentQuantity <= Number(quantity)) {
                            throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                        } else {
                            p.quantity -= Number(quantity);
                            totalPrice += price * Number(quantity);
                        }
                    }

                });
            }
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`;
    }

    rottingVegetable(type, quantity) {

        let result = ``;

        if (!this._products.includes(type)) {
            throw new Error(`${type} is not available in the store.`);
        } else {
            this.availableProducts.forEach(p => {

                let product = Object.values(p)[0];
                let availableQuantity = Object.values(p)[1];

                if (product == type) {

                    if (availableQuantity <= quantity) {
                        p.quantity = 0;
                        result = `The entire quantity of the ${type} has been removed.`;
                    } else {
                        p.quantity -= quantity;
                        result = `Some quantity of the ${type} has been removed.`;
                    }
                }
            });

            return result;
        }
    }

    revision() {
        let result = [];

        result.push(`Available vegetables:`);

        this.availableProducts.sort((a, b) => a.price - b.price);

        for (let element of this.availableProducts) {
            result.push(`${element.type}-${element.quantity}-$${element.price}`);
        }

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join(`\n`);
    }

}



let vegStore = new VegetableStore('Jerrie Munro', '1463 Pette Kyosheta, Sofia');

console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]))
console.log(vegStore.rottingVegetable("Okra", 1))
console.log(vegStore.rottingVegetable("Okra", 2.5))
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]))
console.log(vegStore.revision())