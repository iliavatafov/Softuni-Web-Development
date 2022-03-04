function carsDataManager(input) {

    let carsData = new Map();

    input.map(x => x.split(` | `)).map(([carBran, carModel, producedCars]) => {
        if (!carsData.has(carBran)) {
            carsData.set(carBran, new Map())
        }
        let currentCar = carsData.get(carBran);
        if (!currentCar.has(carModel)) {
            currentCar.set(carModel, Number(producedCars));
        } else {
            currentCar.set(carModel, currentCar.get(carModel) + Number(producedCars));
        }

    });

    for (let [brand, cars] of carsData) {
        console.log(`${brand}`);
        for (let [car, quantity] of cars) {
            console.log(`###${car} -> ${quantity}`);
        }
    }

}

carsDataManager([
    `Mercedes-Benz | 50PS | 123`,
    `Mini | Clubman | 20000`,
    `Mini | Convertible | 1000`,
    `Mercedes-Benz | 60PS | 3000`,
    `Hyunday | Elantra GT | 20000`,
    `Mini | Countryman | 100`,
    `Mercedes-Benz | W210 | 100`,
    `Mini | Clubman | 1000`,
    `Mercedes-Benz | W163 | 200`
])