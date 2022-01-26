function rounding(number, precision) {

    if (precision > 15) {
        precision = 15;
    }
    const rounded = number.toFixed(precision);
    const noZeros = parseFloat(rounded);

    console.log(noZeros);
}
