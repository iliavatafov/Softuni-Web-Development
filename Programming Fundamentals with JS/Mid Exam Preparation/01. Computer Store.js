function computerStore(arr) {

    // pop last element and saver it in varialble
    let typeOfCustomer = arr.pop();
    // map another elements of arr to Numbers
    let priceList = arr.map(x => Number(x))   
    // create new variable totalAmount
    let totalAmountBeforeTaxes = 0;
    // make a for of loop 
    // check if every element is positive and if it is add it to the totalAmount, if it is not print "Invalid price!" 
    for (let element of priceList) {
        if (element < 0) {
            console.log(`Invalid price!`)
        } else {
            totalAmountBeforeTaxes += element;
        }
    }
  // check is the final price is equal to zero and if it is print "Invalid order!" 
    if (totalAmountBeforeTaxes === 0) {
        console.log(`Invalid order!`);
        return;
    } 
    // calculate taxes
    // calcucalte totalAmount - taxes
    let taxes = totalAmountBeforeTaxes * 0.20;
    let totalAmount = totalAmountBeforeTaxes + taxes;
    // check if it is discount 10% and modifay price if necesary
    if (typeOfCustomer === `special`) {
        totalAmount *= 0.90;
    } 
    // print result to second decimal
    console.log(`Congratulations you've just bought a new computer!
    Price without taxes: ${totalAmountBeforeTaxes.toFixed(2)}$
    Taxes: ${taxes.toFixed(2)}$
    -----------
    Total price: ${totalAmount.toFixed(2)}$`)
}

computerStore(([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])
    )