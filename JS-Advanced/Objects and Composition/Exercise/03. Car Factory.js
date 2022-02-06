function solve(input) {

    let engines = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    }

    let carriges = {
        hatchback: { type: 'hatchback', color: null },
        coupe: { type: 'coupe', color: null },
    }

    let model = input.model;
    let power = input.power;

    let engine = pickEngine(power, engines);
    let carriage = pickCarige(carriges, input);

    if (input.wheelsize % 2 === 0) {
        input.wheelsize--;
    }

    let wheels = [input.wheelsize, input.wheelsize, input.wheelsize, input.wheelsize];

    let result = {
        model,
        engine,
        carriage,
        wheels
    }

    return result;

    function pickEngine(power, engines) {
        let bestEngine = null;
        if (power <= 90) {
            bestEngine = engines.smallEngine;
        } else if (power <= 120) {
            bestEngine = engines.normalEngine;
        } else {
            bestEngine = engines.monsterEngine;
        }
        return bestEngine;
    }

    function pickCarige(carriges, input) {
        let carrige = input.carriage;
        let color = input.color;
        carriges[carrige].color = color;
        return carriges[carrige];
    }
}