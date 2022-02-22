function solution() {

    let storage = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    return (input) => {

        let [command, microElementOrRecipe, quantity] = input.split(` `);

        switch (command) {

            case `restock`:
                if (storage.hasOwnProperty(microElementOrRecipe)) {
                    storage[microElementOrRecipe] += Number(quantity);
                    return `Success`;
                }

            case `prepare`:

                return prepare(microElementOrRecipe, storage, quantity);

            case `report`:
                let printLine = ``;
                Object.keys(storage).map((x) => printLine += `${x}=${storage[x]} `);
                return printLine.trim();
        }
    }

    function prepare(microElementOrRecipe, storage, quantity) {

        if (microElementOrRecipe === `apple`) {

            if (storage.carbohydrate > 0 && storage.flavour > 1) {

                storage.carbohydrate -= 1 * Number(quantity);
                storage.flavour -= 2 * Number(quantity);
                return `Success`;

            } else if (storage.carbohydrate <= 0) {

                return `Error: not enough carbohydrate in stock`;

            } else if (storage.flavour <= 1) {

                return `Error: not enough flavour in stock`;

            }
        } else if (microElementOrRecipe === `lemonade`) {

            if (storage.carbohydrate > 9 && storage.flavour > 19) {

                storage.carbohydrate -= 10 * Number(quantity);
                storage.flavour -= 20 * Number(quantity);
                return `Success`;

            } else if (storage.carbohydrate <= 9) {

                return `Error: not enough carbohydrate in stock`;

            } else if (storage.flavour <= 19) {

                return `Error: not enough flavour in stock`;

            }

        } else if (microElementOrRecipe === `burger`) {

            if (storage.carbohydrate > 4 && storage.fat > 6 && storage.flavour > 2) {

                storage.carbohydrate -= 5 * Number(quantity);
                storage.fat -= 7 * Number(quantity);
                storage.flavour -= 3 * Number(quantity);
                return `Success`;

            } else if (storage.carbohydrate <= 4) {

                return `Error: not enough carbohydrate in stock`;

            } else if (storage.fat <= 6) {

                return `Error: not enough fat in stock`;

            } else if (storage.flavour <= 2) {

                return `Error: not enough flavour in stock`;

            }

        } else if (microElementOrRecipe === `eggs`) {

            if (storage.protein > 4 && storage.fat > 0 && storage.flavour > 0) {

                storage.protein -= 5 * Number(quantity);
                storage.fat -= 1 * Number(quantity);
                storage.flavour -= 1 * Number(quantity);
                return `Success`;

            } else if (storage.protein <= 4) {

                return `Error: not enough protein in stock`;

            } else if (storage.fat <= 0) {

                return `Error: not enough fat in stock`;

            } else if (storage.flavour <= 0) {

                return `Error: not enough flavour in stock`;

            }

        } else if (microElementOrRecipe === `turkey`) {

            if (storage.protein > 9 && storage.carbohydrate > 9 && storage.fat > 9 && storage.flavour > 9) {

                storage.protein -= 10 * Number(quantity);
                storage.carbohydrate -= 10 * Number(quantity);
                storage.fat -= 10 * Number(quantity);
                storage.flavour -= 10 * Number(quantity);
                return `Success`;

            } else if (storage.protein <= 9) {

                return `Error: not enough protein in stock`;

            } else if (storage.carbohydrate <= 9) {

                return `Error: not enough carbohydrate in stock`;

            } else if (storage.fat <= 9) {

                return `Error: not enough fat in stock`;

            } else if (storage.flavour <= 9) {

                return `Error: not enough flavour in stock`;
            }
        }
    }
}