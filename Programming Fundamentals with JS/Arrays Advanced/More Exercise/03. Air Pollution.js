function airPollution(arr, forces) {
    let matrix = arr.map(row => row.split(' ').map(x => Number(x)));
    forces.map(row => row.split(' '));
    for (let i = 0; i < forces.length; i++) {
        let currentOperation = forces[i].split(` `);
        let force = currentOperation[0];
        let valueOrIndex = currentOperation[1];

        switch (force) {
            case `breeze`:
                for (let col = 0; col < 5; col++) {
                    matrix[valueOrIndex][col] -= 15;
                    if (matrix[valueOrIndex][col] < 0) {
                        matrix[valueOrIndex][col] = 0;
                    }
                }
                break;
            case `gale`:
                for (let row = 0; row < 5; row++) {
                    matrix[row][valueOrIndex] -= 20;
                    if (matrix[row][valueOrIndex] < 0) {
                        matrix[row][valueOrIndex] = 0;
                    }
                }
                break;
            case `smog`:
                for (let r = 0; r < 5; r++) {
                    for (let c = 0; c < 5; c++) {
                        matrix[r][c] += Number(valueOrIndex);
                    }
                }
                break;
        }

    }
    let isPulutedAreas = false;
    let result = [];
    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if (matrix[row][col] >= 50) {
                isPulutedAreas = true;
                result.push(`[${row}-${col}]`)
            }
        }
    }
    if (isPulutedAreas) {
        console.log(`Polluted areas: ${result.join(`, `)}`)
    } else {
        console.log(`No polluted areas`)
    }
}


airPollution(
    ['5 7 72 14 4',
        '41 35 37 27 33',
        '23 16 27 42 12',
        '2 20 28 39 14',
        '16 34 31 10 24'],
    ['breeze 1', 'gale 2', 'smog 25']
)