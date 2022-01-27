function solve(arr) {
    let step = Number(arr[arr.length - 1]);
    let result = [];

    for (i = 0; i < arr.length - 1; i += step) {
        result.push(arr[i]);
    }
    console.log(result.join(` `));
}


