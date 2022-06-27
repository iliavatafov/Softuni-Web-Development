class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
        this.soldCarsCount = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model !== `` && Number.isInteger(horsepower) && horsepower >= 0 &&
            price === Number(price) && price >= 0 && Number(mileage) === mileage && mileage >= 0) {
            this.availableCars.push({ model, horsepower, price, mileage });
            return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
        } else {
            throw new Error(`Invalid input!`);
        }
    }

    sellCar(model, desiredMileage) {

        let availableCar = this.availableCars.filter(obj => obj.model === model);

        let currentPrice = 0;

        if (availableCar.length === 0) {
            throw new Error(`${model} was not found!`);
        } else {
            if (availableCar[0].mileage <= Number(desiredMileage)) {
                currentPrice = availableCar[0].price;
            } else if (availableCar[0].mileage - Number(desiredMileage) <= 40000) {
                currentPrice = availableCar[0].price * 0.95;
            } else {
                currentPrice = availableCar[0].price * 0.90;
            }

            this.soldCars.push({ model, horsepower: availableCar[0].horsepower, soldPrice: currentPrice });

            let indexElementForRemove = 0;

            for (let i = 0; i < this.availableCars.length; i++) {
                if (this.availableCars[i].model === model) {
                    indexElementForRemove = i;
                }
            }

            this.availableCars.splice(indexElementForRemove, 1);
            this.soldCarsCount += 1;
            this.totalIncome += currentPrice;

            return `${model} was sold for ${currentPrice.toFixed(2)}$`
        }
    }

    currentCar() {
        if (this.availableCars.length > 0) {
            let result = [];
            result.push(`-Available cars:`);
            this.availableCars.forEach(car => result.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`));
            return result.join(`\n`);
        } else {
            return `There are no available cars`;
        }
    }

    salesReport(criteria) {

        if (criteria !== `horsepower` && criteria !== `model`) {
            throw new Error(`Invalid criteria!`);
        } else if (criteria === `horsepower`) {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        let result = [];

        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCarsCount} cars sold:`);
        this.soldCars.forEach(car => result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`));

        return result.join(`\n`);
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 200, 29000, 187000);
dealership.addCar('Mercedes C64', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
dealership.sellCar('Mercedes C64', 110000);
dealership.sellCar('Wudi A3', 110000);
console.log(dealership.salesReport('model'));