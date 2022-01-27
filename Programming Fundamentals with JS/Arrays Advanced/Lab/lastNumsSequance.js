function lastNumSequance(n, k) {

    let arr = [1];
    let result = 0;

    for (let i = 1; i < n; i++) {
        for (let j = i - k; j < i; j++) {
            result += arr[j];
            if (Number.isNaN(result)) {
                result = 0;
            }
        }
        arr.push(result);
        result = 0;
    }
    console.log(arr.join(` `));
}
