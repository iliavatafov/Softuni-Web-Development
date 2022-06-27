class Restaurant {

    constructor(buget) {
        this.budgetMoney = Number(buget);
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products) {

        for (let element of products) {

            let [productName, productQuantity, productTotalPrice] = element.split(` `);

            if (this.budgetMoney >= Number(productTotalPrice)) {

                this.budgetMoney -= Number(productTotalPrice);

                if (!this.stockProducts.hasOwnProperty(productName)) {
                    this.stockProducts[productName] = Number(productQuantity);
                } else {
                    this.stockProducts[productName] += Number(productQuantity);
                }

                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.history.join(`\n`);
    }

    addToMenu(meal, neededProducts, productPrice) {

        if (!this.menu.hasOwnProperty(meal)) {

            this.menu[meal] = {
                products: neededProducts,
                price: Number(productPrice),
            }

            let currentNumberOfMeals = Object.keys(this.menu).length;

            if (currentNumberOfMeals == 1) {
                return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
            } else {
                return `Great idea! Now with the ${meal} we have ${currentNumberOfMeals} meals in the menu, other ideas?`;
            }

        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
    }

    showTheMenu() {
        let numberOfMeals = Object.keys(this.menu).length;

        if (numberOfMeals > 0) {

            let result = [];

            Object.entries(this.menu).map(p => result.push(`${p[0]} - $ ${p[1].price}`));

            return result.join(`\n`);
        } else {
            return `Our menu is not ready yet, please come later...`;
        }
    }

    makeTheOrder(meal) {

        if (!this.menu.hasOwnProperty(meal)) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } else {
            let isEnoughProducts = true;

            this.menu[meal].products.map(x => {
                let [productName, productQuantity] = x.split(` `);
                if (!this.stockProducts.hasOwnProperty(productName) || this.stockProducts[productName] < Number(productQuantity)) {
                    isEnoughProducts = false;
                }
            });

            if (isEnoughProducts) {
                this.budgetMoney += this.menu[meal].price;

                this.menu[meal].products.map(x => {
                    let [productName, productQuantity] = x.split(` `);
                    this.stockProducts[productName] -= Number(productQuantity);
                });

                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
    }
}