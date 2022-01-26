function cataloguePrograme(arr) {
    let catalogue = [];
    for (let list of arr) {
        let [productName, productPrice] = list.split(` : `);
        let object = {
            productName: productName,
            productPrice: Number(productPrice),
        }
        catalogue.push(object);
    }
    let currentLetter = ``;
    catalogue.sort((a, b) => a.productName.localeCompare(b.productName));
    for (let product of catalogue) {
        if (product.productName.charAt(0).toUpperCase() === currentLetter) {
            console.log(`${product.productName}: ${product.productPrice}`);
        } else {
            currentLetter = product.productName.charAt(0).toUpperCase();
            console.log(currentLetter);
            console.log(`${product.productName}: ${product.productPrice}`);
        }
    }
}