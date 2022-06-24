class ChristmasDinner {
    constructor(buget) {
        if (buget < 0) {
            throw new Error('The budget cannot be a negative number');
        } else {
            this.buget = buget;
        }
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }

    shopping(products) {
        const [type, price] = products;

        if (this.buget < price) {
            throw new Error('Not enough money to buy this product');
        } else {
            this.products.push(type);
            this.buget -= price;
            return `You have successfully bought ${type}!`;
        }
    }

    recipes(recipe) {
        let isAllProduts = true;
        recipe.productsList.map(p => {
            if (!this.products.some(pr => pr == p)) {
                isAllProduts = false;
            }
        });

        if (!isAllProduts) {
            throw new Error('We do not have this product');
        }

        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`;
    }

    inviteGuests(name, dish) {

        let isDishAvailable = false;

        this.dishes.map(d => {
            if (d.recipeName == dish) {
                isDishAvailable = true;
            }
        });

        if (!isDishAvailable) {
            throw new Error('We do not have this dish');
        }

        if (Object.keys(this.guests).length > 0) {
            for (let key in this.guests) {
                if (key == name) {
                    throw new Error('This guest has already been invited');
                }
            }
        }

        this.guests[name] = dish;
        return `You have successfully invited ${name}!`;

    }

    showAttendance() {
        const result = [];
        Object.entries(this.guests).forEach((g) => {
            result.push(`${g[0]} will eat ${g[1]}, which consists of ${this.dishes.filter(d => d.recipeName == g[1])[0].productsList.join(', ')}`)
        });

        return result.join('\n');

    }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(['Salt', 1]);
dinner.shopping(['Beans', 3]);
dinner.shopping(['Cabbage', 4]);
dinner.shopping(['Rice', 2]);
dinner.shopping(['Savory', 1]);
dinner.shopping(['Peppers', 1]);
dinner.shopping(['Fruits', 40]);
dinner.shopping(['Honey', 10]);

dinner.recipes({
    recipeName: 'Oshav',
    productsList: ['Fruits', 'Honey']
});
dinner.recipes({
    recipeName: 'Folded cabbage leaves filled with rice',
    productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
});
dinner.recipes({
    recipeName: 'Peppers filled with beans',
    productsList: ['Beans', 'Peppers', 'Salt']
});

dinner.inviteGuests('Ivan', 'Oshav');
dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
dinner.inviteGuests('Georgi', 'Peppers filled with beans');

console.log(dinner.showAttendance());