function firstLastNumbers(arr) {

    let k = arr.shift();

    let first = arr.slice(0, k);
    let last = arr.slice(-k);

    console.log(first.join(` `));
    console.log(last.join(` `));
}