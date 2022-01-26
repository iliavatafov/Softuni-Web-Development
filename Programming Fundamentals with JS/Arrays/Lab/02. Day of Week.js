function dayOfWeek(n) {

    let days = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`, `Sunday`];

    if (n > 0 && n < 8) {
        console.log(days[n - 1]);
    } else {
        console.log(`Invalid day!`);
    }
}

