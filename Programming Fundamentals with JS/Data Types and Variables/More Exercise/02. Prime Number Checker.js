function primeNumberChecking(N) {

    if (N < 2) {
        console.log(false);
        return;
    }
    for (let i = 2; i <= N / 2; i++) {
        if (N % i === 0) {
            console.log(false);
            return;
        }
    }
    console.log(true);
}