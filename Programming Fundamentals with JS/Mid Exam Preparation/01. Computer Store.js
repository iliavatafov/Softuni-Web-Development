function computerStore(arr) {

    let typeOfCustomer = arr.pop();
    let priceList = arr.map(x => Number(x))
    let totalAmountBeforeTaxes = 0;
    for (let element of priceList) {
        if (element < 0) {
            console.log(`Invalid price!`)
        } else {
            totalAmountBeforeTaxes += element;
        }
    }
    if (totalAmountBeforeTaxes === 0) {
        console.log(`Invalid order!`);
        return;
    }
    let taxes = totalAmountBeforeTaxes * 0.20;
    let totalAmount = totalAmountBeforeTaxes + taxes;
    if (typeOfCustomer === `special`) {
        totalAmount *= 0.90;
    }
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalAmountBeforeTaxes.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${totalAmount.toFixed(2)}$`);
}
