class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {

        let currentVegitable = vegetables.shift();

        const productsAdded = [];

        while (currentVegitable) {

            let [type, quantity, price] = currentVegitable.split(' ');

            if (!productsAdded.some(e => e == type)) {
                productsAdded.push(type);
            }

            const vegitableObj = {
                type,
                quantity: Number(quantity),
                price: Number(price)
            }

            const matchedVegitable = this.availableProducts.find(p => p.type == type);

            if (matchedVegitable) {
                matchedVegitable.quantity += Number(quantity);
                if (matchedVegitable.price < price) {
                    matchedVegitable.price = Number(price);
                }
            } else {
                this.availableProducts.push(vegitableObj);
            }

            currentVegitable = vegetables.shift();
        }

        return `Successfully added ${productsAdded.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {

        let currentProduct = selectedProducts.shift();

        let totalPrice = 0;

        while (currentProduct) {

            let [type, quantity] = currentProduct.split(' ');

            const availableProduct = this.availableProducts.find(p => p.type == type);

            if (!availableProduct) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            } else {
                if (availableProduct.quantity < quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
                } else {
                    const price = Number(quantity) * availableProduct.price;
                    availableProduct.quantity -= Number(quantity);
                    totalPrice += price;
                }
            }

            currentProduct = selectedProducts.shift();
        }

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {

        const availableProduct = this.availableProducts.find(p => p.type == type);

        if (availableProduct) {
            if (quantity > availableProduct.quantity) {
                availableProduct.quantity = 0;
                return `The entire quantity of the ${type} has been removed.`
            } else {
                availableProduct.quantity -= Number(quantity);
                return `Some quantity of the ${type} has been removed.`
            }
        } else {
            throw new Error(`${type} is not available in the store.`);
        }
    }

    revision() {

        const result = [];

        result.push('Available vegetables:');

        this.availableProducts.sort((a, b) => a.price - b.price).map(p => result.push(`${p.type}-${p.quantity}-$${p.price}`));

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`)

        return result.join(`\n`);
    }
}


let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());