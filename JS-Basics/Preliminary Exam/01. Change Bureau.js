function changeBuro(input) {

    let bitcoinCount = Number(input.shift());
    let yoanCount = Number(input.shift());
    let commission = Number(input.shift());

    let bitcoinBGN = bitcoinCount * 1168;
    let yoanUSD = yoanCount * 0.15;
    let dollarBGN = yoanUSD * 1.76;

    let total = bitcoinBGN + dollarBGN;

    let totalInEUR = total / 1.95;

    let netTotal = totalInEUR - (totalInEUR * (commission * 0.01));


    console.log(netTotal.toFixed(2));
}

