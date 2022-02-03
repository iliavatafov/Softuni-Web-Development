function solve(stringNum, c1, c2, c3, c4, c5) {

    let n = Number(stringNum);
    let arr = [c1, c2, c3, c4, c5];

    for (let i = 0; i < 5; i++) {
        switch (arr[i]) {
            case `chop`:
                n /= 2;
                break;
            case `dice`:
                n = Math.sqrt(n);
                break;
            case `spice`:
                n += 1;
                break;
            case `bake`:
                n *= 3;
                break;
            case `fillet`:
                n *= 0.80;
                break
        }
        console.log(n);
    }
}