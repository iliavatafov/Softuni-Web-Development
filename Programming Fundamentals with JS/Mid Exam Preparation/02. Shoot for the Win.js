function shootForTheWin(arr) {
    let targetsValue = arr.shift().split(` `).map(x => Number(x));
    let length = arr.length;
    let count = 0;

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === `End`) {
            console.log(`Shot targets: ${count} -> ${targetsValue.join(` `)}`)
        } else {
            if (arr[index] >= 0 && arr[index] < targetsValue.length) {
                count++;
                for (let i = 0; i < targetsValue.length; i++) {
                    if (i != arr[index] && targetsValue[i] > targetsValue[arr[index]] && targetsValue[i] !== -1) {
                        targetsValue[i] -= targetsValue[arr[index]];
                    } else if (i != arr[index] && targetsValue[i] <= targetsValue[arr[index]] && targetsValue[i] !== -1) {
                        targetsValue[i] += targetsValue[arr[index]];
                    }
                }
                targetsValue[arr[index]] = -1;
            }

        }
    }
}

