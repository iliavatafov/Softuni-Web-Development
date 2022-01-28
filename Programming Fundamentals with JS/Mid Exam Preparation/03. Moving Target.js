function movingTarget(arr) {
    let sequanceOfTargets = arr.shift().split(` `).map(x => Number(x));

    for (let command of arr) {
        if (command === `End`) {
            console.log(sequanceOfTargets.join(`|`))
        } else {
            let [operation, index, value] = command.split(` `);
            switch (operation) {
                case `Shoot`:
                    shoot(Number(index), Number(value), sequanceOfTargets);
                    break;
                case `Add`:
                    add(index, Number(value), sequanceOfTargets);
                    break;
                case `Strike`:
                    strike(Number(index), Number(value), sequanceOfTargets);
                    break;
            }
        }
    }
    function shoot(index, power, sequanceOfTargets) {
        if (index >= 0 && index < sequanceOfTargets.length) {
            if (sequanceOfTargets[index] - power > 0) {
                sequanceOfTargets[index] -= power
            } else {
                sequanceOfTargets.splice(index, 1);
            }
        }
    }

    function add(index, value, sequanceOfTargets) {
        if (index >= 0 && index < sequanceOfTargets.length) {
            sequanceOfTargets.splice(index, 0, value)
        } else {
            console.log(`Invalid placement!`)
        }
    }

    function strike(index, radius, sequanceOfTargets) {
        let countElements = radius * 2 + 1;
        let startIndex = index - radius;
        let endIndex = index + radius;
        if (startIndex >= 0 && endIndex < sequanceOfTargets.length) {
            sequanceOfTargets.splice(startIndex, countElements);
        } else {
            console.log(`Strike missed!`);
        }
    }
}

