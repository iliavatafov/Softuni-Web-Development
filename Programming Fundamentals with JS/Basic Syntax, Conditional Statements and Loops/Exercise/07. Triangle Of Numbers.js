function triangleOfNumbers(n) {

    let printLine = "";

    for (i = 1; i <= n; i++) {

        for (j = 1; j <= i; j++) {
            printLine += i + " ";
        }
        console.log(printLine);
        printLine = "";
    }
}