function solve(data) {
    let storageMap = new Map();
    for (let line of data) {
        let [product, quantity] = line.split(` `);
        if (storageMap.has(product)) {
            storageMap.set(product, storageMap.get(product) + Number(quantity));
        } else {
            storageMap.set(product, Number(quantity));
        }
    }
    let iterable = storageMap.keys();
    for (let key of iterable) {
        console.log(`${key} -> ${storageMap.get(key)}`)
    }
}

solve(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40']
)