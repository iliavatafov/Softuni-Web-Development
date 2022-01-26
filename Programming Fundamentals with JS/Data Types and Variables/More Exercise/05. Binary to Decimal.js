function binaryToDecimal(binary) {

    binary = binary.toString();

    let currentResult = 0;
    let sum = 0;

    binary = binary.split("").reverse().join("");

    let binary1 = parseInt(binary)

    for (let i = 0; i < binary.length; i++) {
        currentResult = Number(binary[i]) * Math.pow(2, i)
        sum += currentResult;
    }
    console.log(sum)
}