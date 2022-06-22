class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (typeof plantName == 'string' && Number(spaceRequired) != NaN) {
            if (spaceRequired <= this.spaceAvailable) {
                this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
                this.spaceAvailable -= spaceRequired;
                return `The ${plantName} has been successfully planted in the garden.`;
            } else {
                throw new Error('Not enough space in the garden.');
            }
        }
    }

    ripenPlant(plantName, quantity) {

        let plant = null;
        this.plants.forEach(p => {
            if (p.plantName == plantName) {
                plant = p;
            }
        });

        if (plant == null) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (plant.ripe == true) {
            throw new Error(`The ${plantName} is already ripe.`);
        } else if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        } else {

            for (let p of this.plants) {
                if (p.plantName == plantName) {
                    p.ripe = true;
                    p.quantity += Number(quantity);
                    if (quantity == 1) {
                        return `${quantity} ${plantName} has successfully ripened.`;
                    } else {
                        return `${quantity} ${plantName}s have successfully ripened.`;
                    }
                }
            }
        }
    }

    harvestPlant(plantName) {

        let plant = null;
        this.plants.forEach(p => {
            if (p.plantName == plantName) {
                plant = p;
            }
        });

        if (plant == null) {
            throw new Error(`There is no ${plantName} in the garden.`);
        } else if (plant.ripe == false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        } else {
            let removeIndex = null;

            for (let i = 0; i < this.plants.length - 1; i++) {
                if (this.plants[i].plantName == plantName) {
                    removeIndex = i;
                }
            }

            this.plants.splice(removeIndex, 1);
            this.storage.push(`${plant.plantName} (${plant.quantity})`);
            this.spaceAvailable += plant.spaceRequired;

            return `The ${plantName} has been successfully harvested.`;
        }
    }

    generateReport() {
        let report = [];
        report.push(`The garden has ${this.spaceAvailable} free space left.`);

        const sortedPlants = this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        let sorted = [];
        sortedPlants.forEach(p => sorted.push(p.plantName));

        report.push(`Plants in the garden: ${sorted.join(', ')}`);
        if (this.storage.length == 0) {
            report.push('Plants in storage: The storage is empty.');
        } else {
            report.push(`Plants in storage: ${this.storage.join(', ')}`);
        }

        return report.join('\n');
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());