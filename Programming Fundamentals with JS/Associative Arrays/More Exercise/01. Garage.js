function solve(arr) {

    let garage = {};

    for (let el of arr) {
        el = el.split(` - `)
        let garageNumber = el.shift();
        let countCars = 0;
        if (!garage.hasOwnProperty(garageNumber)) {
            garage[garageNumber] = [];
        }
        for (let list of el) {
            let elements = list.split(`, `);
            let car = []
            for (let element of elements) {
                let [key, value] = element.split(`: `);
                car.push(`${key} - ${value}`)
            }
            garage[garageNumber].push(car)
        }
    }
    for (let [key, value] of Object.entries(garage)) {
        console.log(`Garage № ${key}`);
        for (let currentArray of value) {
            let firstElement = currentArray.shift();
            let print = `--- ${firstElement}`;
            if (currentArray.length > 0) {
                for (let element of currentArray) {
                    print += `, ${element}`
                }
            }
            console.log(print);
        }
    }
}

