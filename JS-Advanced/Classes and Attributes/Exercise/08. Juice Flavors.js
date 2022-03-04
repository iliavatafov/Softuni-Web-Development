function bottlesCreator(input) {

    let storage = new Map();
    let bottles = new Map();

    input.map(x => x.split(` => `))
        .map(([juice, quantity]) => {

            if (storage.has(juice)) {
                storage.set(juice, storage.get(juice) + Number(quantity));
            } else {
                storage.set(juice, Number(quantity));
            }

            let currentJuiceQuantity = storage.get(juice);

            if (currentJuiceQuantity >= 1000) {

                let newBottles = Math.floor(currentJuiceQuantity / 1000);

                if (newBottles > 0) {

                    if (!bottles.has(juice)) {
                        bottles.set(juice, newBottles);
                        storage.set(juice, storage.get(juice) - newBottles * 1000);
                    } else {
                        bottles.set(juice, bottles.get(juice) + newBottles);
                        storage.set(juice, storage.get(juice) - newBottles * 1000);
                    }
                }
            }
        });

    for (let element of bottles) {
        console.log(`${element[0]} => ${element[1]}`);
    }
}